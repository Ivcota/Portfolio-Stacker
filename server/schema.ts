import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import {
  checkbox,
  image,
  password,
  relationship,
  text,
} from "@keystone-6/core/fields";
import { Session } from "./auth";

/* 
Below are functions that define the permissions for the entities that keystone is handling.

isAdmin - checks if the session holder is an admin

const isAdmin = ({ session }: { session: Session }) => session.data.isAdmin;

hasRights - checks if the session holder owns the entity 
isUser - checks if admin and is user
*/

const hasRights = ({ item, session }: { item: any; session: Session }) => {
  if ((session as Session).data.isAdmin) {
    return true;
  }

  return item.userId === (session as Session).data.id ? true : false;
};

const isUser = ({ item, session }: { item: any; session: Session }) => {
  if ((session as Session).data.isAdmin) {
    return true;
  }

  return item.id === (session as Session).data.id ? true : false;
};

/* The Schema that the backend applicaiton will be working from. */

export const lists: Lists = {
  User: list({
    access: {
      item: {
        update: isUser,
        delete: isUser,
      },
    },
    fields: {
      username: text({
        hooks: {
          /* Resolve a username based off the firstname and lastname being combined */
          resolveInput: async ({ inputData, item }) => {
            if (inputData.firstName && inputData.lastName) {
              return ("@" +
                (inputData?.firstName as string) +
                inputData?.lastName) as string;
            }

            if (inputData.firstName) {
              return ("@" +
                (inputData?.firstName as string) +
                item?.lastName) as string;
            }

            if (inputData.lastName) {
              return ("@" +
                (item?.firstName as string) +
                inputData?.lastName) as string;
            }
          },
        },
      }),
      firstName: text({ validation: { isRequired: true } }),
      lastName: text(),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
      profilePicture: image(),
      socialMediaURL: text(),
      githubURL: text(),
      isAdmin: checkbox({ defaultValue: false }),
      websiteURL: text(),
      projects: relationship({ ref: "Project.user", many: true }),
    },
    ui: {
      listView: {
        initialColumns: ["username", "email", "firstName", "projects"],
      },
      labelField: "email",
    },
  }),
  Project: list({
    access: {
      item: {
        update: hasRights,
        delete: hasRights,
      },
    },
    fields: {
      title: text({ validation: { isRequired: true } }),
      image: image(),
      description: text({ ui: { displayMode: "textarea" } }),
      githubURL: text({ validation: { isRequired: true } }),
      websiteURL: text(),
      user: relationship({ ref: "User.projects" }),
    },
  }),
};
