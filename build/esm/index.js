var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { NativeModules } from 'react-native';
var bridge = NativeModules.ReactNativeBiometrics;
/**
 * Enum for touch id sensor type
 */
export var TouchID = 'TouchID';
/**
 * Enum for face id sensor type
 */
export var FaceID = 'FaceID';
/**
 * Enum for generic biometrics (this is the only value available on android)
 */
export var Biometrics = 'Biometrics';
export var BiometryTypes = {
    TouchID: TouchID,
    FaceID: FaceID,
    Biometrics: Biometrics
};
export var ReactNativeBiometricsLegacy;
(function (ReactNativeBiometricsLegacy) {
    /**
     * Returns promise that resolves to an object with object.biometryType = Biometrics | TouchID | FaceID
     * @returns {Promise<Object>} Promise that resolves to an object with details about biometrics available
     */
    function isSensorAvailable() {
        return new ReactNativeBiometrics().isSensorAvailable();
    }
    ReactNativeBiometricsLegacy.isSensorAvailable = isSensorAvailable;
    /**
     * Creates a public private key pair,returns promise that resolves to
     * an object with object.publicKey, which is the public key of the newly generated key pair
     * @returns {Promise<Object>}  Promise that resolves to object with details about the newly generated public key
     */
    function createKeys() {
        return new ReactNativeBiometrics().createKeys();
    }
    ReactNativeBiometricsLegacy.createKeys = createKeys;
    /**
     * Creates a symmetric encryption key, returns promise that resolves to a boolean indicating success/failure.
     * @returns {Promise<Object>}  Promise that resolves to object with success status
     */
    function createEncryptionKey() {
        return new ReactNativeBiometrics().createEncryptionKey();
    }
    ReactNativeBiometricsLegacy.createEncryptionKey = createEncryptionKey;
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details aobut the existence of keys
     */
    function biometricEncryptionKeyExists() {
        return new ReactNativeBiometrics().biometricEncryptionKeyExists();
    }
    ReactNativeBiometricsLegacy.biometricEncryptionKeyExists = biometricEncryptionKeyExists;
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details about the existence of keys
     */
    function biometricKeysExist() {
        return new ReactNativeBiometrics().biometricKeysExist();
    }
    ReactNativeBiometricsLegacy.biometricKeysExist = biometricKeysExist;
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the encryption key properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    function deleteEncryptionKey() {
        return new ReactNativeBiometrics().deleteEncryptionKey();
    }
    ReactNativeBiometricsLegacy.deleteEncryptionKey = deleteEncryptionKey;
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the keys were properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    function deleteKeys() {
        return new ReactNativeBiometrics().deleteKeys();
    }
    ReactNativeBiometricsLegacy.deleteKeys = deleteKeys;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.decrypted as UTF-8 string
     * @param {Object} decryptDataOptions
     * @param {string} decryptDataOptions.promptMessage
     * @param {string} decryptDataOptions.payload: base64 encoded data
     * @param {string} decryptDataOptions.iv: base64 encoded IV
     * @param {string} createSignatureOptions.cancelButtonText (Android only)
     * @returns {Promise<Object>}  Promise that resolves to an object containing encryption details
     */
    function decryptData(decryptDataOptions) {
        return new ReactNativeBiometrics().decryptData(decryptDataOptions);
    }
    ReactNativeBiometricsLegacy.decryptData = decryptData;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.encrypted and object.iv,
     * which is the base64 encoded encrypted payload and its encryption IV respectively.
     * @param {Object} createSignatureOptions
     * @param {string} createSignatureOptions.promptMessage
     * @param {string} createSignatureOptions.payload: Should be ASCII or UTF-8
     * @param {string} createSignatureOptions.cancelButtonText (Android only)
     * @returns {Promise<Object>}  Promise that resolves to an object containing encryption details
     */
    function encryptData(createSignatureOptions) {
        return new ReactNativeBiometrics().encryptData(createSignatureOptions);
    }
    ReactNativeBiometricsLegacy.encryptData = encryptData;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.signature,
     * which is cryptographic signature of the payload
     * @param {Object} createSignatureOptions
     * @param {string} createSignatureOptions.promptMessage
     * @param {string} createSignatureOptions.payload
     * @returns {Promise<Object>}  Promise that resolves to an object cryptographic signature details
     */
    function createSignature(createSignatureOptions) {
        return new ReactNativeBiometrics().createSignature(createSignatureOptions);
    }
    ReactNativeBiometricsLegacy.createSignature = createSignature;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.success = true if the user passes,
     * object.success = false if the user cancels, and rejects if anything fails
     * @param {Object} simplePromptOptions
     * @param {string} simplePromptOptions.promptMessage
     * @param {string} simplePromptOptions.fallbackPromptMessage
     * @returns {Promise<Object>}  Promise that resolves an object with details about the biometrics result
     */
    function simplePrompt(simplePromptOptions) {
        return new ReactNativeBiometrics().simplePrompt(simplePromptOptions);
    }
    ReactNativeBiometricsLegacy.simplePrompt = simplePrompt;
})(ReactNativeBiometricsLegacy || (ReactNativeBiometricsLegacy = {}));
var ReactNativeBiometrics = /** @class */ (function () {
    /**
     * @param {Object} rnBiometricsOptions
     * @param {boolean} rnBiometricsOptions.allowDeviceCredentials
     */
    function ReactNativeBiometrics(rnBiometricsOptions) {
        var _a;
        this.allowDeviceCredentials = false;
        var allowDeviceCredentials = (_a = rnBiometricsOptions === null || rnBiometricsOptions === void 0 ? void 0 : rnBiometricsOptions.allowDeviceCredentials) !== null && _a !== void 0 ? _a : false;
        this.allowDeviceCredentials = allowDeviceCredentials;
    }
    /**
     * Returns promise that resolves to an object with object.biometryType = Biometrics | TouchID | FaceID
     * @returns {Promise<Object>} Promise that resolves to an object with details about biometrics available
     */
    ReactNativeBiometrics.prototype.isSensorAvailable = function () {
        return bridge.isSensorAvailable({
            allowDeviceCredentials: this.allowDeviceCredentials
        });
    };
    /**
     * Creates a public private key pair,returns promise that resolves to
     * an object with object.publicKey, which is the public key of the newly generated key pair
     * @returns {Promise<Object>}  Promise that resolves to object with details about the newly generated public key
     */
    ReactNativeBiometrics.prototype.createKeys = function () {
        return bridge.createKeys({
            allowDeviceCredentials: this.allowDeviceCredentials
        });
    };
    /**
     * Creates a symmetric encryption key, returns promise that resolves to a boolean indicating success/failure.
     * @returns {Promise<Object>}  Promise that resolves to object with success status
     */
    ReactNativeBiometrics.prototype.createEncryptionKey = function () {
        return bridge.createEncryptionKey();
    };
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details aobut the existence of keys
     */
    ReactNativeBiometrics.prototype.biometricEncryptionKeyExists = function () {
        return bridge.biometricEncryptionKeyExists();
    };
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details aobut the existence of keys
     */
    ReactNativeBiometrics.prototype.biometricKeysExist = function () {
        return bridge.biometricKeysExist();
    };
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the encryption key properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    ReactNativeBiometrics.prototype.deleteEncryptionKey = function () {
        return bridge.deleteEncryptionKey();
    };
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the keys were properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    ReactNativeBiometrics.prototype.deleteKeys = function () {
        return bridge.deleteKeys();
    };
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.decrypted as UTF-8 string
     * @param {Object} decryptDataOptions
     * @param {string} decryptDataOptions.promptMessage
     * @param {string} decryptDataOptions.payload: base64 encoded data
     * @param {string} decryptDataOptions.iv: base64 encoded IV
     * @param {string} createSignatureOptions.cancelButtonText (Android only)
     * @returns {Promise<Object>}  Promise that resolves to an object containing encryption details
     */
    ReactNativeBiometrics.prototype.decryptData = function (decryptDataOptions) {
        if (!decryptDataOptions.cancelButtonText) {
            decryptDataOptions.cancelButtonText = 'Cancel';
        }
        return bridge.decryptData(decryptDataOptions);
    };
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.encrypted and object.iv,
     * which is the base64 encoded encrypted payload and its encryption IV respectively.
     * @param {Object} createSignatureOptions
     * @param {string} createSignatureOptions.promptMessage
     * @param {string} createSignatureOptions.payload: Should be ASCII or UTF-8
     * @param {string} createSignatureOptions.cancelButtonText (Android only)
     * @returns {Promise<Object>}  Promise that resolves to an object containing encryption details
     */
    ReactNativeBiometrics.prototype.encryptData = function (createSignatureOptions) {
        if (!createSignatureOptions.cancelButtonText) {
            createSignatureOptions.cancelButtonText = 'Cancel';
        }
        return bridge.encryptData(createSignatureOptions);
    };
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.signature,
     * which is cryptographic signature of the payload
     * @param {Object} createSignatureOptions
     * @param {string} createSignatureOptions.promptMessage
     * @param {string} createSignatureOptions.payload
     * @returns {Promise<Object>}  Promise that resolves to an object cryptographic signature details
     */
    ReactNativeBiometrics.prototype.createSignature = function (createSignatureOptions) {
        var _a;
        createSignatureOptions.cancelButtonText = (_a = createSignatureOptions.cancelButtonText) !== null && _a !== void 0 ? _a : 'Cancel';
        return bridge.createSignature(__assign({ allowDeviceCredentials: this.allowDeviceCredentials }, createSignatureOptions));
    };
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.success = true if the user passes,
     * object.success = false if the user cancels, and rejects if anything fails
     * @param {Object} simplePromptOptions
     * @param {string} simplePromptOptions.promptMessage
     * @param {string} simplePromptOptions.fallbackPromptMessage
     * @returns {Promise<Object>}  Promise that resolves an object with details about the biometrics result
     */
    ReactNativeBiometrics.prototype.simplePrompt = function (simplePromptOptions) {
        var _a, _b;
        simplePromptOptions.cancelButtonText = (_a = simplePromptOptions.cancelButtonText) !== null && _a !== void 0 ? _a : 'Cancel';
        simplePromptOptions.fallbackPromptMessage = (_b = simplePromptOptions.fallbackPromptMessage) !== null && _b !== void 0 ? _b : 'Use Passcode';
        return bridge.simplePrompt(__assign({ allowDeviceCredentials: this.allowDeviceCredentials }, simplePromptOptions));
    };
    return ReactNativeBiometrics;
}());
export default ReactNativeBiometrics;
//# sourceMappingURL=index.js.map