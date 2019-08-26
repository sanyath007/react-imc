import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import PatientList from "./views/PatientList";
import PatientForm from "./views/PatientForm";
import RegistrationList from "./views/RegistrationList";
import RegistrationForm from "./views/RegistrationForm";
import VisitionList from "./views/VisitionList";
import VisitionForm from "./views/VisitionForm";
import BlogPosts from "./views/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/patients",
    layout: DefaultLayout,
    component: PatientList
  },
  {
    path: "/new-patient",
    layout: DefaultLayout,
    component: PatientForm
  },
  {
    path: "/registrations",
    layout: DefaultLayout,
    component: RegistrationList
  },
  {
    path: "/new-registration",
    layout: DefaultLayout,
    component: RegistrationForm
  },
  {
    path: "/visitions",
    layout: DefaultLayout,
    component: VisitionList
  },
  {
    path: "/new-visition",
    layout: DefaultLayout,
    component: VisitionForm
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
