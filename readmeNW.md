# NW Build Notes

gridsome develop

## Image dimensions

Home page largest should be 1920x1200 (widescreen computer monitor size and aspect ratio)

Sub pages

-   panorama largest 1004x473
-   portraits

    13.6.20
    Forked so that branch master has all Instagram references removed - so it builds on Netlify.
    Branch Instagram still has all Instagram functionality intact and working.

## Branch notes

-   Master contains nothing for Instagram. I removed @zefman/gridsome-source-instagram plugin.
-   Instagram contains original attempt as per https://github.com/zefman/gridsome-source-instagram in index.vue. Works on local but not Netlify.
-   Axios contains axios version as per #11 at https://github.com/zefman/gridsome-source-instagram/issues/11. Error [Vue warn]: Property or method "photos" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property.
