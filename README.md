# webbox basic
Essentially Webbox but without javascript, advanced CSS, and stuff like that.

My goal: to make it render perfectly with Netsurf.

Right now, Webbox Basic is caught up to Webbox 1.4-sup1.

NOTE: There is a KNOWN BUG where if you use this in a `file:///` URL in chrome, it WON'T be able to load the navbar. To navigate, disable javascript for the local html files, or don't use Chrome for it. It works fine with github pages or if you run a webserver and use localhost.

The reason for it? Simply because chrome wants to be "secure" (but doesnt care) and disables loading other files in non-http and non-chrome urls. This doesn't make it any more secure, but whatever google. You do you.
