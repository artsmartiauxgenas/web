import lume from "lume/mod.ts";

const site = lume();
site.copy("_includes/css/style.css");
site.copy("_includes/images/logo_dragon.png");
site.copy("_includes/images/logo_tigre.png");
//site.copy("static");
site.data("form_endpoint", Deno.env.get("FORM_ENDPOINT"));

export default site;
