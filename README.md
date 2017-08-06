# offline-CDN
For those who work when web is unreachable.

## Components

- Compass
- Bootstrap (scss)
- Fontawesome
- JQuery
- Middleman

## Installation

Create a new project with the template:

```bash
$ middleman init -T mars228/offline-cdn MY_NEW_PROJECT
```

## Usage

Collect what You need create and copy files to correspond folders (or create symlinks). Save all information in data/libraries.yml. (Check files and folder permissions!)

Create a static file with:

```bash
$ middleman build
```

Move (or copy) build site to destination location. Remeber to add needed information to Your http server! I'm using Apache, in my cdn.lh.conf:

```bash
# ----------------------------------------------------------------------
# CORS-enabled images (@crossorigin)
# ----------------------------------------------------------------------
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    # mod_headers, y u no match by Content-Type?!
    <FilesMatch "\.(gif|png|jpe?g|svg|svgz|ico|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>

# ----------------------------------------------------------------------
# Webfont access + js
# ----------------------------------------------------------------------
<IfModule mod_headers.c>
  <FilesMatch "\.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js)$">
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Headers "authorization, origin, user-token, x-requested-with, content-type"
    Header set Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"
  </FilesMatch>
</IfModule>
```
