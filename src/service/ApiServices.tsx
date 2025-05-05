import { generateClient } from "@aws-amplify/api";
import { getCurrentUser } from "@aws-amplify/auth";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import { getUrl, downloadData } from "aws-amplify/storage";

import { get } from "http";
const client = generateClient();
class ApiServices {
  static async saveUserInfo(userInfo: any) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return null; // Handle case where user is not authenticated
    const existingUser = await ApiServices.getUserInfo(currentUser.username);
    if (existingUser) {
      localStorage.setItem("userInfo", JSON.stringify(existingUser));
      return existingUser;
    }

    const newUser = {
      uuid: currentUser.username,
      isActive: userInfo.isActive,
      isAdmin: false,
      email: currentUser.username,
      name: currentUser.username,
    };
    try {
      // const client = generateClient<Schema>();
      await client.graphql({
        query: mutations.createUploaderUserInfo,
        variables: { input: newUser },
        authMode: "userPool",
      });

      localStorage.setItem("userInfo", JSON.stringify(newUser));
      return newUser;
    } catch (error) {
      console.error("Error saving user info:", error);
      throw error;
    }
  }

  static async getRecordedPhrases() {
    try {
      const response = await client.graphql({
        query: queries.listRecordedPhrases,
        authMode: "userPool",
      });

      const items = response.data.listRecordedPhrases.items || [];
      const validItems = items.filter((item) => item !== null);
      return validItems.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } catch (error) {
      console.error("Error fetching recorded phrases:", error);
      throw error;
    }
  }

  static async updateValidation(data: any) {
    try {
      const updateFields = {
        id: data.id,
        isValidated: data.isValidated,
        validationStatus: data.validationStatus,
        validationComment: data.validationComment,
        validationRating: data.validationRating,
        validatedBy: data.validatedBy,
        validatedAt: data.validatedAt,
      };

      await client.graphql({
        query: mutations.updateRecordedPhrase,
        variables: { input: updateFields },
        authMode: "userPool",
      });

      return true;
    } catch (error) {
      console.error("Error updating validation:", error);
      throw error;
    }
  }

  static async pushFileHistory(fileHistory: any) {
    try {
      const response = await client.graphql({
        query: mutations.createUploaderFileHistory,
        variables: { input: fileHistory },
        authMode: "userPool",
      });

      return response.data.createUploaderFileHistory;
    } catch (error) {
      console.error("Error saving file history:", error);
      throw error;
    }
  }

  static async getUserInfo(uuid: string) {
    try {
      const response = await client.graphql({
        query: queries.listUploaderUserInfos,
        variables: { filter: { uuid: { eq: uuid } } },
        authMode: "userPool",
      });

      const items = response.data?.listUploaderUserInfos?.items || [];
      if (items.length > 0)
        return items[0]; // Return the first item if it exists
      else return null; // Return null if no items found
    } catch (error) {
      console.error("Error fetching user info:", error);
      throw error;
    }
  }

  static async getUserName(uuid: string) {
    try {
      const response = await client.graphql({
        query: queries.listUserInfos,
        variables: { filter: { id: { eq: uuid } } },
        authMode: "userPool",
      });

      const items = response.data?.listUserInfos?.items || [];
      if (items.length > 0) {
        return items[0];
      }
      return null; // Return null if no items found
    } catch (error) {
      console.error("Error fetching user name:", error);
      throw error;
    }
  }

  static async downloadFile(fileHistory: any) {
    try {
      const { result } = await downloadData({ path: fileHistory.downloadUrl });
      const blob = await (await result).body.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileHistory.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return { canUpload: true, message: "File downloaded successfully." };
    } catch (error: any) {
      console.error('Error downloading file:', error);
      return {
        canUpload: false,
        message: error.message || "Error downloading file",
      };
    }
  }
}

export default ApiServices;
