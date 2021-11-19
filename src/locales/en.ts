import { pluralize } from "../utils/items";

const en = {
  brand: () => "nextjs-nestjs",

  actions: {
    add: () => "Add",
    cancel: () => "Cancel",
    close: () => "Close",
    confirm: () => "Confirm",
    copy: () => "Copy",
    create: () => "Create",
    delete: () => "Delete",
    deleteItem: (itemType: string) => `Delete ${itemType}`,
    edit: () => "Edit",
    like: () => "Like",
    pickColor: () => "Pick a Color",
    save: () => "Save",
    seeMore: () => "See More",
    search: () => "Search",
    share: () => "Share",
    submit: () => "Submit",
  },

  labels: {
    all: () => "All",
  },

  states: {
    loading: () => "Loading...",
    saving: () => "Saving...",
  },

  prompts: {
    logOut: () => "Are you sure you want to log out?",
    deleteItem: (itemType: string) =>
      `Are you sure you want to delete this ${itemType}?`,
  },

  errors: {
    somethingWrong: () => "Something went wrong.",
    imageUploadError: () => "Unable to upload images.",
  },

  forms: {
    none: () => "None",
  },

  navigation: {
    events: () => "Events",
    home: () => "Home",
    invites: () => "Invites",
    menu: () => "Menu",
    preferences: () => "Preferences",
    profile: () => "Profile",
    users: () => "Users",
    groups: () => "Groups",
    roles: () => "Roles",
  },

  about: {
    labels: {
      about: () => "About",
    },
  },

  users: {
    actions: {
      editProfile: () => "Edit Profile",
      follow: () => "Follow",
      unfollow: () => "Unfollow",
      logIn: () => "Log in",
      logOut: () => "Log out",
      signUp: () => "Sign up",
      passwordConfirm: () => "Confirm password",
    },
    form: {
      bio: () => "Bio",
      coverPhoto: () => "Cover Photo",
      describeYourself: () => "Describe yourself...",
      email: () => "Email",
      name: () => "Name",
      password: () => "Password",
      profilePicture: () => "Profile Picture",
      setCoverPhoto: () => "Set a cover photo...",
    },
    joinedWithDate: (date: string) => `Joined ${date}`,
    following: () => "Following",
    followingWithSize: (size: number) => `${size} Following`,
    followersWithSize: (size: number) => `${size} Follower${pluralize(size)}`,
    errors: {
      signUp: () => "There was an error creating your account.",
      update: () => "There was an error updating your account.",
    },
    validation: {
      invalidEmail: () => "Email is invalid.",
      emailRequired: () => "Email is required.",
      emailExists: () => "Email already exists.",
      noUserWithEmail: () => "No user exists with that email.",
      passwordLength: (min: number, max: number) =>
        `Password must be between ${min} and ${max} chars.`,
      passwordRequired: () => "Password is required.",
      passwordConfirmMatch: () => "Password and Confirm Password must match.",
      wrongPassword: () => "Wrong password. Please try again.",
      nameLength: (min: number, max: number) =>
        `Name must be between ${min} and ${max} chars.`,
      nameRequired: () => "Name is required.",
    },
    permissionDenied: () => "Permission denied.",
    alreadyLoggedIn: () => "You're already signed in.",
    alreadyRegistered: () => "You have already created an account.",
  },

  posts: {
    actions: {
      post: () => "Post",
    },
    form: {
      whatsHappening: () => "What's happening?",
      postEmpty: () => "Post cannot be empty.",
      saySomething: () => "Say something...",
    },
    labels: {
      posts: () => "Posts",
    },
    errors: {
      create: () => "Unable to create post.",
      update: () => "Post could not be edited.",
    },
  },

  comments: {
    actions: {
      comment: () => "Comment",
    },
    form: {
      leaveAComment: () => "Leave a comment...",
    },
    errors: {
      create: () => "Unable to post comment.",
      update: () => "Unable to edit comment.",
    },
    totalComments: (total: number) => `${total} Comment${pluralize(total)}`,
  },

  groups: {
    actions: {
      approve: () => "Approve",
      cancelRequest: () => "Cancel Request",
      leave: () => "Leave",
      join: () => "Join",
      manageRoles: () => "Manage Roles",
      remove: () => "Remove",
      discover: () => "Discover Groups",
    },
    prompts: {
      leaveGroup: () => "Are you sure you want to leave this group?",
      removeGroupMember: () =>
        "Are you sure you want to remove this member from the group?",
    },
    form: {
      name: () => "Name",
      description: () => "Description",
    },
    errors: {
      create: () => "Unable to create group.",
      update: () => "Group could not be edited.",
    },
    tabs: {
      feed: () => "Feed",
      motions: () => "Motions",
      events: () => "Events",
      about: () => "About",
    },
    breadcrumbs: {
      about: () => "About",
      editGroup: () => "Edit Group",
      groups: () => "Groups",
      groupRoles: () => "Group Roles",
    },
    joined: () => "Joined",
    members: (size: number) => `${size} Member${pluralize(size)}`,
    requests: (size: number) => `${size} Request${pluralize(size)}`,
    memberRequests: (size: number) =>
      `${size} Member Request${pluralize(size)}`,
    notFound: {
      member: () => "Member not found.",
      request: () => "Request not found.",
    },
    settings: {
      name: () => "Settings",
      nameWithGroup: () => "Group Settings",
    },
  },

  settings: {
    states: {
      on: () => "On",
      off: () => "Off",
    },
  },

  roles: {
    actions: {
      addMembers: () => "Add members",
      initializeAdminRole: () => "Initialize Admin Role",
    },
    form: {
      name: () => "Name",
      colorPickerLabel: () => "Role Color",
    },
    errors: {
      create: () => "Unable to create role.",
      update: () => "Unable to update role.",
    },
    prompts: {
      initializeAdminRoleConfirm: () =>
        "Are you sure you want to create an admin role for this server? If you did not create this server or haven't been granted permission otherwise, please hit 'Cancel'.",
    },
    tabs: {
      display: () => "Display",
      permissions: () => "Permissions",
      members: () => "Members",
    },
    breadcrumbs: {
      groupRoles: () => "Group Roles",
      roles: () => "Roles",
    },
    labels: {
      role: () => "• Role: ",
      member: () => "• Member: ",
    },
    members: {
      prompts: {
        removeMemberConfirm: () =>
          "Are you sure you want to remove this member?",
      },
      nMembers: (size: number) => `${size} Member${pluralize(size)}`,
    },
    permissions: {
      names: {
        acceptMemberRequests: () => "Approve Member Requests",
        createEvents: () => "Create Events",
        createInvites: () => "Create Invites",
        deleteGroup: () => "Delete Group",
        editGroup: () => "Edit Group",
        kickGroupMembers: () => "Kick Members",
        manageUsers: () => "Manage Members",
        manageEvents: () => "Manage Events",
        managePosts: () => "Manage Posts",
        manageComments: () => "Manage Comments",
        manageInvites: () => "Manage Invites",
        manageRoles: () => "Manage Roles",
        manageSettings: () => "Manage Settings",
      },
      descriptions: {
        editGroup: () =>
          "Allows members to edit the group's name, description, and cover photo.",
        deleteGroup: () => "Allows members to permanently delete this group.",
        createEvents: () => "Allows members to create and plan events.",
        manageEvents: () =>
          "Allows members to remove events created by other members.",
        managePosts: () => "Allows members to delete posts by other members.",
        manageComments: () =>
          "Allows members to remove comments by other members.",
        manageRoles: () =>
          "Allows members to create new roles and edit or delete roles lower than their highest role.",
        manageGroupSettings: () =>
          "Allows members to make changes to this group's settings.",
        acceptMemberRequests: () =>
          "Allows members to view member requests and to allow new members to join the group.",
        kickGroupMembers: () =>
          "Allows members to remove other members from the group.",
        manageUsers: () =>
          "Allows members to view the full list of server members and kick other members from the server.",
        manageInvites: () =>
          "Allows members to view the full list of server invites.",
        createInvites: () =>
          "Allows members to invite new people to this server.",
      },
      states: {
        enabled: () => "Enabled",
        disabled: () => "Disabled",
      },
    },
    groupRoles: () => "Group Roles",
    serverRoles: () => "Server Roles",
    noRoles: () => "No roles have been created for this server yet.",
    noMembersOrPermissions: () =>
      "This role has no permissions enabled and no assigned members.",
  },

  invites: {
    actions: {
      generate: () => "Generate a New Link",
    },
    labels: {
      invites: () => "Invites",
      serverInvites: () => "Server Invites",
    },
    columnNames: {
      inviter: () => "INVITER",
      code: () => "CODE",
      uses: () => "USES",
      expires: () => "EXPIRES",
    },
    prompts: {
      removeInviteConfirm: () => "Are you sure you want to remove this invite?",
    },
    form: {
      expiresAtOptions: {
        oneDay: () => "1 day",
        sevenDays: () => "7 days",
        oneMonth: () => "1 month",
        never: () => "Never (default)",
      },
      maxUsesOptions: {
        noLimit: () => "No limit (default)",
        xUses: (x: number) => `${x} use${x === 1 ? "" : "s"}`,
      },
      labels: {
        expiresAt: () => "Expires after",
        maxUses: () => "Max number of uses",
      },
    },
    redeem: {
      alreadySignedUp: () => "You've already signed up.",
      expiredOrInvalid: () => "Your invite link is either expired or invalid.",
      inviteRequired: () => "You need to be invited in order to sign up.",
    },
    copiedToClipboard: () => "Copied to clipboard",
  },

  events: {
    actions: {
      create: () => "Create Event",
    },
    prompts: {
      noUpcoming: () => "No upcoming events.",
      noneThisWeek: () => "No events happening this week.",
      noneOnline: () => "No online events.",
      noPast: () => "No past events.",
    },
    form: {
      description: () => "Description",
      endsAt: () => "End Date and Time",
      externalLink: () => "External Link",
      http: () => "http://",
      includeAddress: () => "Include a place or address",
      location: () => "Location",
      name: () => "Name",
      onlineSubtext: () => "Plan a virtual event",
      startsAt: () => "Start Date and Time",
      chooseHost: () => "Choose a host",
      host: () => "Host",
    },
    errors: {
      create: () => "Unable to create event.",
      update: () => "Event could not be updated.",
    },
    breadcrumbs: {
      editEvent: () => "Edit Event",
      event: () => "Event",
    },
    timeFrames: {
      past: () => "Past Events",
      future: () => "Upcoming Events",
    },
    attendance: {
      going: () => "Going",
      interested: () => "Interested",
    },
    online: {
      online: () => "Online",
      onlineEvent: () => "Online Event",
    },
    tabs: {
      about: () => "About",
      discussion: () => "Discussion",
      upcoming: () => "Upcoming",
      thisWeek: () => "This Week",
      past: () => "Past",
    },
    by: () => "Event by ",
    motion: () => "Event Motion",
    discover: () => "Discover Events",
    whatToExpect: () => "What To Expect",
  },

  images: {
    couldNotRender: () => "Data could not render.",
  },

  items: {
    notFound: (itemType: string) => `${itemType} not found.`,
  },

  pagination: {
    rowsPerPage: () => "Rows per page: ",
  },

  time: {
    now: () => "now",
    hr: () => "hr",
    min: () => "min",
    minutes: (minutes: number) => `${minutes}m`,
    hours: (hours: number) => `${hours}h`,
    days: (days: number) => `${days}d`,
    infinity: () => "∞",
  },

  development: {
    notImplemented: () => "This feature has not yet been implemented.",
  },

  middotWithSpaces: () => " · ",
};

export default en;
