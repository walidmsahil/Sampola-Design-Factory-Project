/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor5 from "@_sh/strapi-plugin-ckeditor/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import strapiTiptapEditor from "strapi-tiptap-editor/strapi-admin";
import translation from "../../src/plugins/translation/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

import customisations from "../../src/admin/app.tsx";

renderAdmin(document.getElementById("strapi"), {
  customisations,

  plugins: {
    ckeditor5: ckeditor5,
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "import-export-entries": importExportEntries,
    "strapi-tiptap-editor": strapiTiptapEditor,
    translation: translation,
  },
});
