// Simon Game - Modern Implementation
$(document).ready(function () {
    // Game state variables
    let gameSequence = [];
    let playerSequence = [];
    let level = 0;
    let isGameActive = false;
    let isPlayerTurn = false;
    let currentScore = 0;
    let highScore = parseInt(localStorage.getItem('simonHighScore')) || 0;
    let isButtonProcessing = false;
    let isLevelTransition = false;
    let activeTimeouts = [];

    // Game configuration constants
    const COLORS = ['green', 'red', 'yellow', 'blue'];
    const POINTS_PER_LEVEL = 10;
    const FLASH_DURATION = 400;
    const SEQUENCE_DELAY = 600;
    const NEXT_LEVEL_DELAY = 1200;
    const GAME_START_DELAY = 800;
    const PLAYER_INPUT_DELAY = 400;
    const SEQUENCE_START_DELAY = 600;
    const BUTTON_FLASH_DURATION = 300;
    const GAME_OVER_SOUND_DELAY = 150;
    const PROCESSING_DELAY = 300;

    // Audio frequencies for each color
    const FREQUENCIES = {
        green: 329.63,   // E4
        red: 261.63,     // C4  
        yellow: 220.00,  // A3
        blue: 164.81     // E3
    };

    // Keyboard controls mapping
    const KEYBOARD_CONTROLS = {
        81: 'green',  // Q
        87: 'red',    // W
        65: 'yellow', // A
        83: 'blue',   // S
        32: 'start'   // Space
    };

    let audioContext = null;

    function initAudioContext() {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            audioContext = null;
        }
    }

    // UTILITY FUNCTIONS
    
    // Timeout manager to prevent memory leaks
    function addTimeout(callback, delay) {
        const timeoutId = setTimeout(() => {
            const index = activeTimeouts.indexOf(timeoutId);
            if (index > -1) {
                activeTimeouts.splice(index, 1);
            }
            callback();
        }, delay);

        activeTimeouts.push(timeoutId);
        return timeoutId;
    }

    function clearAllTimeouts() {
        activeTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
        activeTimeouts = [];
    }

    function saveHighScore() {
        localStorage.setItem('simonHighScore', highScore.toString());
    }

    function getRandomColor() {
        return COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    // DISPLAY FUNCTIONS

    function updateDisplay() {
        $('#level').text(level);
        $('#currentScore').text(currentScore);
        $('#highScore').text(highScore);
    }

    function updateGameStatus(message) {
        $('#gameStatus').text(message);
    }

    function updateStartButton(text) {
        $('#startBtn').text(text);
    }

    // AUDIO FUNCTIONS

    function playSound(color) {
        if (!audioContext) return;

        if (audioContext.state === 'suspended') {
            audioContext.resume().catch(() => { });
        }

        try {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = FREQUENCIES[color];
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (error) {
            // Silent fail for unsupported browsers
        }
    }

    function playGameOverSound() {
        if (!audioContext) return;

        try {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.5);
            oscillator.type = 'sawtooth';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (error) {
            // Silent fail for unsupported browsers
        }
    }

    // BUTTON CONTROL FUNCTIONS

    function setButtonsEnabled(enabled) {
        if (enabled) {
            $('.simon-button').removeClass('disabled');
        } else {
            $('.simon-button').addClass('disabled');
        }
    }

    function flashButton(color) {
        const $button = $(`#${color}`);

        $button.removeClass('disabled').addClass('active');
        playSound(color);

        addTimeout(() => {
            $button.removeClass('active');

            if (!isPlayerTurn) {
                $button.addClass('disabled');
            }
        }, FLASH_DURATION);
    }

    function flashAllButtons() {
        $('.simon-button').removeClass('disabled').addClass('active');

        addTimeout(() => {
            $('.simon-button').removeClass('active');
            setButtonsEnabled(true);
        }, BUTTON_FLASH_DURATION);
    }

    // GAME LOGIC FUNCTIONS

    function initGame() {
        updateDisplay();
        updateGameStatus('Ready! Press the button to start');
        setButtonsEnabled(true);
    }

    function startGame() {
        if (isButtonProcessing || isLevelTransition) return;

        isButtonProcessing = true;
        $('body').removeClass('game-over');

        // Reset game state
        clearAllTimeouts();
        gameSequence = [];
        playerSequence = [];
        level = 0;
        currentScore = 0;
        isGameActive = true;
        isPlayerTurn = false;
        isLevelTransition = false;

        updateDisplay();
        updateStartButton('RESET');
        updateGameStatus('Game starting...');
        $('.simon-button').removeClass('active');
        setButtonsEnabled(false);

        // Start first level
        addTimeout(() => {
            isButtonProcessing = false;
            nextLevel();
        }, GAME_START_DELAY);
    }

    function stopGame() {
        if (isButtonProcessing) return;

        isButtonProcessing = true;
        $('body').removeClass('game-over');

        // Reset everything
        clearAllTimeouts();
        isGameActive = false;
        isPlayerTurn = false;
        isLevelTransition = false;
        gameSequence = [];
        playerSequence = [];
        level = 0;
        currentScore = 0;

        updateDisplay();
        updateStartButton('START');
        updateGameStatus('Ready! Press the button to start');
        $('.simon-button').removeClass('active');
        setButtonsEnabled(true);

        addTimeout(() => {
            isButtonProcessing = false;
        }, PROCESSING_DELAY);
    }

    function nextLevel() {
        if (!isGameActive) return;

        level++;
        isLevelTransition = false;
        playerSequence = [];
        isPlayerTurn = false;
        setButtonsEnabled(false);

        // Add new color to sequence
        const newColor = getRandomColor();
        gameSequence.push(newColor);

        updateDisplay();
        updateGameStatus(`Level ${level} - Watch the sequence!`);

        showSequence();
    }

    function showSequence() {
        let sequenceIndex = 0;

        function showNextColor() {
            if (sequenceIndex < gameSequence.length && isGameActive) {
                flashButton(gameSequence[sequenceIndex]);
                sequenceIndex++;

                addTimeout(() => {
                    if (sequenceIndex < gameSequence.length) {
                        showNextColor();
                    } else {
                        // Enable player input
                        addTimeout(() => {
                            if (!isGameActive) return;
                            isPlayerTurn = true;
                            setButtonsEnabled(true);
                            updateGameStatus(`Your turn! Repeat the sequence (${gameSequence.length} colors)`);
                        }, PLAYER_INPUT_DELAY);
                    }
                }, SEQUENCE_DELAY);
            }
        }

        addTimeout(() => {
            if (isGameActive) {
                showNextColor();
            }
        }, SEQUENCE_START_DELAY);
    }

    function handlePlayerInput(color) {
        if (!isGameActive || !isPlayerTurn || isLevelTransition || isButtonProcessing) {
            return;
        }

        playerSequence.push(color);
        flashButton(color);

        // Validate input
        const currentIndex = playerSequence.length - 1;
        if (playerSequence[currentIndex] !== gameSequence[currentIndex]) {
            gameOver();
            return;
        }

        // Check if level completed
        if (playerSequence.length === gameSequence.length) {
            currentScore = level * POINTS_PER_LEVEL;
            isPlayerTurn = false;
            isLevelTransition = true;

            addTimeout(() => {
                setButtonsEnabled(false);
            }, FLASH_DURATION);

            updateGameStatus('Correct! Advancing to the next level...');
            updateDisplay();

            // Progress to next level
            addTimeout(() => {
                if (isGameActive && isLevelTransition) {
                    nextLevel();
                }
            }, NEXT_LEVEL_DELAY);
        } else {
            updateGameStatus(`Keep going! (${playerSequence.length}/${gameSequence.length})`);
        }
    }

    function gameOver() {
        if (!isGameActive) return;

        // End game
        isGameActive = false;
        isPlayerTurn = false;
        isLevelTransition = false;
        setButtonsEnabled(false);
        clearAllTimeouts();

        $('body').addClass('game-over');

        const previousHighScore = parseInt(localStorage.getItem('simonHighScore')) || 0;
        const isNewRecord = currentScore > previousHighScore;

        if (isNewRecord) {
            highScore = currentScore;
            saveHighScore();
            updateDisplay();
        }

        const statusMessage = isNewRecord ?
            `👾 New record! Your final score: ${currentScore}` :
            `Game over! Your final score: ${currentScore}`;

        updateGameStatus(statusMessage);
        updateStartButton('RESTART');

        // Game over effects
        flashAllButtons();
        addTimeout(() => {
            playGameOverSound();
        }, GAME_OVER_SOUND_DELAY);
    }

    // EVENT HANDLERS

    function handleStartButtonClick() {
        if (isButtonProcessing) return;

        if (isGameActive) {
            stopGame();
        } else {
            startGame();
        }
    }

    function handleSimonButtonClick() {
        const color = $(this).data('color');
        handlePlayerInput(color);
    }

    function handleKeyboardInput(e) {
        const keyCode = e.which;

        if (keyCode === 32) {
            e.preventDefault();
            if (!isButtonProcessing) {
                handleStartButtonClick();
            }
            return;
        }

        // Color keys during gameplay
        if (isGameActive && isPlayerTurn && !isLevelTransition) {
            const color = KEYBOARD_CONTROLS[keyCode];
            if (color && color !== 'start') {
                e.preventDefault();
                handlePlayerInput(color);
            }
        }
    }

    // INITIALIZATION

    function setupEventListeners() {
        $('#startBtn').click(handleStartButtonClick);
        $('.simon-button').click(handleSimonButtonClick);
        
        $('.simon-button').on('touchstart', function(e) {
            e.preventDefault();
        });

        $('.simon-button').on('touchend', function(e) {
            e.preventDefault();
            $(this).blur();

            if (isGameActive && isPlayerTurn && !isLevelTransition && !isButtonProcessing) {
                const color = $(this).data('color');
                handlePlayerInput(color);
            }
        });

        $('#startBtn').on('touchstart', function(e) {
            e.preventDefault();
        });

        $('#startBtn').on('touchend', function(e) {
            e.preventDefault();
            $(this).blur();

            if (!isButtonProcessing) {
                handleStartButtonClick();
            }
        });

        $(document).keydown(handleKeyboardInput);

        $(document).on('touchstart', function() {
            $('.simon-button, #startBtn').blur();
        });
    }

    function initialize() {
        initAudioContext();
        setupEventListeners();
        initGame();
    }

    // Start the game
    initialize();
});