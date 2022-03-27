import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import hero from "./objects/hero";
import button from "./objects/button";
import announcement from "./objects/announcement";
import link from "./objects/link";
import accessibleImage from "./objects/accessibleImage";
import desktopNavigation from "./objects/desktopNavigation";
import desktopSecondaryNavigation from "./objects/desktopSecondaryNavigation";
import mobileNavigation from "./objects/mobileNavigation";
import navigationItem from "./objects/navigationItem";
import subNavigationItem from "./objects/subNavigationItem";

import global from "./documents/global";
import page from "./documents/page";
import navigationLink from "./documents/navigationLink";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    hero,
    button,
    announcement,
    link,
    accessibleImage,
    desktopNavigation,
    desktopSecondaryNavigation,
    mobileNavigation,
    navigationItem,
    subNavigationItem,
    global,
    page,
    navigationLink,
  ]),
});
