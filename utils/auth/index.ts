/**
 *
 * @param password
 * @return {string} - argon hash
 */
const createHash = async (password: string): Promise<string> => {
    return await Bun.password.hash(password, {
        algorithm: "argon2id", // "argon2id" | "argon2i" | "argon2d"
        memoryCost: 4, // memory usage in kibibytes
        timeCost: 3, // the number of iterations
    });
}

/**
 *
 * @param password
 * @param argonHash
 * @return {boolean} - true if valid, false if not
 */
const verifyHash = async (password: string, argonHash: string): Promise<boolean> => {
    try{
        return await Bun.password.verify(password, argonHash);
    }catch (e: any) {
        console.error(`Unable to verify: ${e.message}`);
        return false;
    }

}

export {
    createHash,
    verifyHash
}