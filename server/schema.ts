/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/

// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
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

export const lists: Lists = {
  User: list({
    access: {
      item: {
        update: isUser,
        delete: isUser,
      },
    },
    fields: {
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
        initialColumns: ["email", "firstName", "projects"],
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
