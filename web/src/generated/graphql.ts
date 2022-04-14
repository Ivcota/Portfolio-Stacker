import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type CloudImageFieldOutput = ImageFieldOutput & {
  __typename?: 'CloudImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  ref?: InputMaybe<Scalars['String']>;
  upload?: InputMaybe<Scalars['Upload']>;
};

export type ImageFieldOutput = {
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type LocalImageFieldOutput = ImageFieldOutput & {
  __typename?: 'LocalImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  ref: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createProject?: Maybe<Project>;
  createProjects?: Maybe<Array<Maybe<Project>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteProject?: Maybe<Project>;
  deleteProjects?: Maybe<Array<Maybe<Project>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateProject?: Maybe<Project>;
  updateProjects?: Maybe<Array<Maybe<Project>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateProjectsArgs = {
  data: Array<ProjectCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteProjectsArgs = {
  where: Array<ProjectWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateProjectsArgs = {
  data: Array<ProjectUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']>;
  githubURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  websiteURL?: Maybe<Scalars['String']>;
};

export type ProjectCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  githubURL?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageFieldInput>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  websiteURL?: InputMaybe<Scalars['String']>;
};

export type ProjectManyRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  githubURL?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  websiteURL?: InputMaybe<OrderDirection>;
};

export type ProjectRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
};

export type ProjectRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  create?: InputMaybe<Array<ProjectCreateInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
};

export type ProjectUpdateArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  githubURL?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<ImageFieldInput>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  websiteURL?: InputMaybe<Scalars['String']>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  description?: InputMaybe<StringFilter>;
  githubURL?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  websiteURL?: InputMaybe<StringFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type QueryProjectsCountArgs = {
  where?: ProjectWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  githubURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  profilePicture?: Maybe<ImageFieldOutput>;
  projects?: Maybe<Array<Project>>;
  projectsCount?: Maybe<Scalars['Int']>;
  socialMediaURL?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  websiteURL?: Maybe<Scalars['String']>;
};


export type UserProjectsArgs = {
  orderBy?: Array<ProjectOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ProjectWhereInput;
};


export type UserProjectsCountArgs = {
  where?: ProjectWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  githubURL?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<ImageFieldInput>;
  projects?: InputMaybe<ProjectRelateToManyForCreateInput>;
  socialMediaURL?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  websiteURL?: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  githubURL?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  socialMediaURL?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
  websiteURL?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  githubURL?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<ImageFieldInput>;
  projects?: InputMaybe<ProjectRelateToManyForUpdateInput>;
  socialMediaURL?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  websiteURL?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  githubURL?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  lastName?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectManyRelationFilter>;
  socialMediaURL?: InputMaybe<StringFilter>;
  username?: InputMaybe<StringFilter>;
  websiteURL?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type EndSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type EndSessionMutation = { __typename?: 'Mutation', endSession: boolean };

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, isAdmin?: boolean | null, websiteURL?: string | null, githubURL?: string | null, socialMediaURL?: string | null, profilePicture?: { __typename?: 'CloudImageFieldOutput', url: string } | { __typename?: 'LocalImageFieldOutput', url: string } | null } } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, username?: string | null, firstName?: string | null, lastName?: string | null, email?: string | null, githubURL?: string | null, isAdmin?: boolean | null, websiteURL?: string | null, projectsCount?: number | null, profilePicture?: { __typename?: 'CloudImageFieldOutput', id: string, url: string } | { __typename?: 'LocalImageFieldOutput', id: string, url: string } | null } | null };

export type UserProjectsQueryVariables = Exact<{
  where: ProjectWhereInput;
}>;


export type UserProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: string, title?: string | null, description?: string | null, githubURL?: string | null, websiteURL?: string | null, image?: { __typename?: 'CloudImageFieldOutput', url: string } | { __typename?: 'LocalImageFieldOutput', url: string } | null }> | null };


export const EndSessionDocument = `
    mutation endSession {
  endSession
}
    `;
export const useEndSessionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<EndSessionMutation, TError, EndSessionMutationVariables, TContext>
    ) =>
    useMutation<EndSessionMutation, TError, EndSessionMutationVariables, TContext>(
      ['endSession'],
      (variables?: EndSessionMutationVariables) => fetcher<EndSessionMutation, EndSessionMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, EndSessionDocument, variables)(),
      options
    );
export const AuthenticateUserWithPasswordDocument = `
    mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        id
        firstName
        lastName
        email
        profilePicture {
          url
        }
        isAdmin
        websiteURL
        githubURL
        socialMediaURL
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
    `;
export const useAuthenticateUserWithPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<AuthenticateUserWithPasswordMutation, TError, AuthenticateUserWithPasswordMutationVariables, TContext>
    ) =>
    useMutation<AuthenticateUserWithPasswordMutation, TError, AuthenticateUserWithPasswordMutationVariables, TContext>(
      ['AuthenticateUserWithPassword'],
      (variables?: AuthenticateUserWithPasswordMutationVariables) => fetcher<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, AuthenticateUserWithPasswordDocument, variables)(),
      options
    );
export const UserDocument = `
    query User {
  authenticatedItem {
    ... on User {
      id
      username
      firstName
      lastName
      email
      profilePicture {
        id
        url
      }
      githubURL
      isAdmin
      websiteURL
      projectsCount
    }
  }
}
    `;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: UserQueryVariables,
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) =>
    useQuery<UserQuery, TError, TData>(
      variables === undefined ? ['User'] : ['User', variables],
      fetcher<UserQuery, UserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UserDocument, variables),
      options
    );
export const UserProjectsDocument = `
    query UserProjects($where: ProjectWhereInput!) {
  projects(where: $where) {
    id
    title
    image {
      url
    }
    description
    githubURL
    websiteURL
  }
}
    `;
export const useUserProjectsQuery = <
      TData = UserProjectsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: UserProjectsQueryVariables,
      options?: UseQueryOptions<UserProjectsQuery, TError, TData>
    ) =>
    useQuery<UserProjectsQuery, TError, TData>(
      ['UserProjects', variables],
      fetcher<UserProjectsQuery, UserProjectsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UserProjectsDocument, variables),
      options
    );