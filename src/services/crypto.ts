import bcrypt from "bcrypt";

class Crypto {
  static async encrypt(text: string) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(text, salt);
  };

  static async compare(text: string, hash: string) {
    return await bcrypt.compare(text, hash);
  };
};

export { Crypto };
