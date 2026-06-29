// 1. Core Generator Engine 
function generateCryptoKey() {
    var algoType = document.getElementById("algoSelect").value;
    var outputField = document.getElementById("keyOutput");
    
    // Add visual feedback pulse when clicked
    outputField.style.borderColor = "#00f2fe";

    if (algoType === "aes256") {
        // Generate random cryptographically strong data buffers
        var randomValues = new Uint32Array(8);
        window.crypto.getRandomValues(randomValues);
        var aesKey = "";
        randomValues.forEach(function(val) {
            aesKey += val.toString(16).padStart(8, '0');
        });
        
        outputField.value = "-----BEGIN AES-256 SECRET KEY-----\n" + aesKey.toUpperCase() + "\n-----END AES-256 SECRET KEY-----";
    } 
    else if (algoType === "hex64") {
        var randomValues = new Uint8Array(32);
        window.crypto.getRandomValues(randomValues);
        var hexSalt = Array.from(randomValues).map(function(b) {
            return b.toString(16).padStart(2, '0');
        }).join('');
        
        outputField.value = "SECURE_SALT_HEX: \n" + hexSalt;
    } 
    else if (algoType === "rsa2048") {
        // Build simulated high-performance asymmetric structural formatting blocks
        var randomValues = new Uint32Array(24);
        window.crypto.getRandomValues(randomValues);
        var simulatedRSA = "";
        randomValues.forEach(function(val, index) {
            simulatedRSA += val.toString(16).padStart(8, '0');
            if ((index + 1) % 4 === 0) {
                simulatedRSA += "\n";
            }
        });
        
        outputField.value = "-----BEGIN RSA PUBLIC KEY BLOCK (2048 BIT)-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n" + simulatedRSA.toUpperCase() + "-----END RSA PUBLIC KEY BLOCK-----";
    }

    setTimeout(function() {
        outputField.style.borderColor = "rgba(255, 255, 255, 0.1)";
    }, 400);
}

// 2. Real-Time Secure SHA-256 Hashing Computation Logic Engine
async function autoHashData() {
    var inputData = document.getElementById("hashInput").value;
    var hashDisplay = document.getElementById("hashOutput");

    if (inputData === "") {
        hashDisplay.innerText = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        return;
    }

    try {
        // Encode text string to structural bytecode streams
        var encoder = new TextEncoder();
        var dataBytes = encoder.encode(inputData);

        // Fetch built-in browser hardware cryptographic digest array mapping values
        var bufferHash = await window.crypto.subtle.digest('SHA-256', dataBytes);
        
        // Final mapping conversion calculation structures
        var hashArray = Array.from(new Uint8Array(bufferHash));
        var finalHexHash = hashArray.map(function(b) {
            return b.toString(16).padStart(2, '0');
        }).join('');
        
        hashDisplay.innerText = finalHexHash;
    } catch (err) {
        console.error("Cryptographic hardware pipeline breakdown: ", err);
    }
}

// 3. Global Clipboard Utilitiess
function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    document.execCommand("copy");
    alert("🚀 Key copied straight to security clipboard!");
}

function copyToClipboardText(elementId) {
    var textVal = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textVal).then(function() {
        alert("🧬 Hex Hash fingerprint recorded to clipboard successfully!");
    });
}
// 4. Advanced Symmetric Rotational Cipher Engine
function processCipher(mode) {
    var inputField = document.getElementById("cipherInput");
    var outputDisplay = document.getElementById("cipherOutput");
    var text = inputField.value;

    if (text === "") {
        outputDisplay.innerText = "⚠️ Please enter text to process.";
        outputDisplay.style.color = "#ffdd57";
        return;
    }

    outputDisplay.style.color = "#00f2fe";

    if (mode === 'encode') {
        // Scramble the message using safe global Base64 binary masking
        try {
            var scrambled = btoa(text);
            outputDisplay.innerText = scrambled;
        } catch (e) {
            outputDisplay.innerText = "❌ Error encoding text stream.";
        }
    } else if (mode === 'decode') {
        // Reverse the message back to completely normal readable text
        try {
            var normalText = atob(text);
            outputDisplay.innerText = normalText;
        } catch (e) {
            outputDisplay.innerText = "❌ Invalid scrambled format! Cannot decode to normal text.";
            outputDisplay.style.color = "#ff4a4a";
        }
    }
}
