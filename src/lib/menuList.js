const create = { title: "create", path: "/user/create" };
const profile = { title: "profile", path: "/user/profile" };
const contact = { title: "contact", path: "/user/contact" };

export const admin = [
    create,
    { title: "students", path: "/user/admin/students" },
    { title: "teachers", path: "/user/admin/teachers" },
    { title: "messages", path: "/user/admin/messages" },
];

export const teacher = [
    create,
    profile,
    // { title: '', path: '' }
    //contact,
];

export const student = [
    contact,
    profile,
];

export const depts = [
    "IT",
    "CS",
    "SE",
    "BBA",
    "MATH",
    "URDU",
    "ZOLOGY",
    "BOTANY",
    "HISTORY",
    "ENGLISH",
    "PHYSICS",
    "ISLAMIYAT",
    "CHEMISTRY",
    "SOCIOLOGOY",
    "PSYCHOLOGY",
    "SOCIAL SCIENCE",
    "POLITICAL SCIENCE",
];