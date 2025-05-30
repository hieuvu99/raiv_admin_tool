// /d:/Project/Raiv_admin_tool/raiv_admin_tool/src/service/ApiServices.ts
import { confirmSignIn, getCurrentUser, signIn, signOut as amplifySignOut, AuthUser } from "@aws-amplify/auth";

class AuthService {
  /**
   * Initiates a sign-in using the user's email.
   * @param email - The user's email address.
   * @returns A promise that resolves when the sign-in is initiated.
   */
  static async signIn(email: string): Promise<any> {
    try {
      const user = await signIn({
        username: email,
        options: {
          authFlowType: "CUSTOM_WITHOUT_SRP", // Replace with a valid AuthFlowType value
        },
      });
      return user;
    } catch (error) {
      console.error("Error during sign-in:", error);
      throw error;
    }
  }

  /**
   * Confirms the user's login challenge using a verification code.
   * @param verificationCode - The verification code entered by the user.
   * @returns A promise that resolves when the challenge is confirmed.
   */
  static async confirmVerificationCode(verificationCode: string): Promise<any> {
    try {
      const user = await confirmSignIn({ challengeResponse: verificationCode });
      return user;
    } catch (error) {
      console.error("Error during verification code confirmation:", error);
      throw error;
    }
  }

  /**
   * Fetches the current authenticated user.
   * @returns A promise that resolves to the current user or null if no user is authenticated.
   */
  static async getCurrentUser(): Promise<AuthUser | null> {
    try {
      return await getCurrentUser();
    } catch {
      return null;
    }
  }

  static async signOut(): Promise<void | null> {
    try {
        await amplifySignOut();
        
    } catch (error) {
      console.error("Error during sign-out:", error);
      return null;
    }
  }
}

export default AuthService;
