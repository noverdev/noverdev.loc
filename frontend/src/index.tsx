import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AdminIndexPage from "./pages/admin/AdminIndexPage";
import SiteIndexPage from "./pages/site/SiteIndexPage";

//@ts-ignore
window.renderAdminIndexPage = function renderAdminIndexPage(elementId: string) {
    render(
        <Router>
            <AdminIndexPage/>
        </Router>,
        document.getElementById(elementId) as HTMLElement
    );
};

//@ts-ignore
window.renderSiteIndexPage = function renderSiteIndexPage(elementId: string) {
    render(
        <Router>
            <SiteIndexPage/>
        </Router>,
        document.getElementById(elementId) as HTMLElement
    );
};