/**
 * Type alias for possible biometry types
 */
export type BiometryType = 'TouchID' | 'FaceID' | 'Biometrics';
interface RNBiometricsOptions {
    allowDeviceCredentials?: boolean;
}
interface IsSensorAvailableResult {
    available: boolean;
    biometryType?: BiometryType;
    error?: string;
}
interface CreateKeysResult {
    publicKey: string;
}
interface BiometricKeysExistResult {
    keysExist: boolean;
}
interface DeleteKeysResult {
    keysDeleted: boolean;
}
interface CreateSignatureOptions {
    promptMessage: string;
    payload: string;
    cancelButtonText?: string;
}
interface DecryptDataOptions {
    promptMessage: string;
    payload: string;
    iv: string;
    cancelButtonText?: string;
}
interface CreateSignatureResult {
    success: boolean;
    signature?: string;
    error?: string;
}
interface SimplePromptOptions {
    promptMessage: string;
    fallbackPromptMessage?: string;
    cancelButtonText?: string;
}
interface EncryptionResult {
    success: boolean;
    encrypted?: string;
    iv?: string;
    error?: string;
}
interface DecryptionResult {
    success: boolean;
    decrypted?: string;
    error?: string;
}
interface SimplePromptResult {
    success: boolean;
    error?: string;
}
/**
 * Enum for touch id sensor type
 */
export declare const TouchID = "TouchID";
/**
 * Enum for face id sensor type
 */
export declare const FaceID = "FaceID";
/**
 * Enum for generic biometrics (this is the only value available on android)
 */
export declare const Biometrics = "Biometrics";
export declare const BiometryTypes: {
    TouchID: string;
    FaceID: string;
    Biometrics: string;
};
export declare module ReactNativeBiometricsLegacy {
    /**
     * Returns promise that resolves to an object with object.biometryType = Biometrics | TouchID | FaceID
     * @returns {Promise<Object>} Promise that resolves to an object with details about biometrics available
     */
    function isSensorAvailable(): Promise<IsSensorAvailableResult>;
    /**
     * Creates a public private key pair,returns promise that resolves to
     * an object with object.publicKey, which is the public key of the newly generated key pair
     * @returns {Promise<Object>}  Promise that resolves to object with details about the newly generated public key
     */
    function createKeys(): Promise<CreateKeysResult>;
    /**
     * Creates a symmetric encryption key, returns promise that resolves to a boolean indicating success/failure.
     * @returns {Promise<Object>}  Promise that resolves to object with success status
     */
    function createEncryptionKey(): Promise<SimplePromptResult>;
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details aobut the existence of keys
     */
    function biometricEncryptionKeyExists(): Promise<BiometricKeysExistResult>;
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details about the existence of keys
     */
    function biometricKeysExist(): Promise<BiometricKeysExistResult>;
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the encryption key properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    function deleteEncryptionKey(): Promise<DeleteKeysResult>;
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the keys were properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    function deleteKeys(): Promise<DeleteKeysResult>;
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
    function decryptData(decryptDataOptions: DecryptDataOptions): Promise<DecryptionResult>;
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
    function encryptData(createSignatureOptions: CreateSignatureOptions): Promise<EncryptionResult>;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.signature,
     * which is cryptographic signature of the payload
     * @param {Object} createSignatureOptions
     * @param {string} createSignatureOptions.promptMessage
     * @param {string} createSignatureOptions.payload
     * @returns {Promise<Object>}  Promise that resolves to an object cryptographic signature details
     */
    function createSignature(createSignatureOptions: CreateSignatureOptions): Promise<CreateSignatureResult>;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.success = true if the user passes,
     * object.success = false if the user cancels, and rejects if anything fails
     * @param {Object} simplePromptOptions
     * @param {string} simplePromptOptions.promptMessage
     * @param {string} simplePromptOptions.fallbackPromptMessage
     * @returns {Promise<Object>}  Promise that resolves an object with details about the biometrics result
     */
    function simplePrompt(simplePromptOptions: SimplePromptOptions): Promise<SimplePromptResult>;
}
export default class ReactNativeBiometrics {
    allowDeviceCredentials: boolean;
    /**
     * @param {Object} rnBiometricsOptions
     * @param {boolean} rnBiometricsOptions.allowDeviceCredentials
     */
    constructor(rnBiometricsOptions?: RNBiometricsOptions);
    /**
     * Returns promise that resolves to an object with object.biometryType = Biometrics | TouchID | FaceID
     * @returns {Promise<Object>} Promise that resolves to an object with details about biometrics available
     */
    isSensorAvailable(): Promise<IsSensorAvailableResult>;
    /**
     * Creates a public private key pair,returns promise that resolves to
     * an object with object.publicKey, which is the public key of the newly generated key pair
     * @returns {Promise<Object>}  Promise that resolves to object with details about the newly generated public key
     */
    createKeys(): Promise<CreateKeysResult>;
    /**
     * Creates a symmetric encryption key, returns promise that resolves to a boolean indicating success/failure.
     * @returns {Promise<Object>}  Promise that resolves to object with success status
     */
    createEncryptionKey(): Promise<SimplePromptResult>;
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details aobut the existence of keys
     */
    biometricEncryptionKeyExists(): Promise<BiometricKeysExistResult>;
    /**
     * Returns promise that resolves to an object with object.keysExists = true | false
     * indicating if the keys were found to exist or not
     * @returns {Promise<Object>} Promise that resolves to object with details aobut the existence of keys
     */
    biometricKeysExist(): Promise<BiometricKeysExistResult>;
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the encryption key properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    deleteEncryptionKey(): Promise<DeleteKeysResult>;
    /**
     * Returns promise that resolves to an object with true | false
     * indicating if the keys were properly deleted
     * @returns {Promise<Object>} Promise that resolves to an object with details about the deletion
     */
    deleteKeys(): Promise<DeleteKeysResult>;
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
    decryptData(decryptDataOptions: DecryptDataOptions): Promise<DecryptionResult>;
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
    encryptData(createSignatureOptions: CreateSignatureOptions): Promise<EncryptionResult>;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.signature,
     * which is cryptographic signature of the payload
     * @param {Object} createSignatureOptions
     * @param {string} createSignatureOptions.promptMessage
     * @param {string} createSignatureOptions.payload
     * @returns {Promise<Object>}  Promise that resolves to an object cryptographic signature details
     */
    createSignature(createSignatureOptions: CreateSignatureOptions): Promise<CreateSignatureResult>;
    /**
     * Prompts user with biometrics dialog using the passed in prompt message and
     * returns promise that resolves to an object with object.success = true if the user passes,
     * object.success = false if the user cancels, and rejects if anything fails
     * @param {Object} simplePromptOptions
     * @param {string} simplePromptOptions.promptMessage
     * @param {string} simplePromptOptions.fallbackPromptMessage
     * @returns {Promise<Object>}  Promise that resolves an object with details about the biometrics result
     */
    simplePrompt(simplePromptOptions: SimplePromptOptions): Promise<SimplePromptResult>;
}
export {};
