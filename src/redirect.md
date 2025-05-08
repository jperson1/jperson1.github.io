---
# This method of redirecting comes from user @warpfork
# https://github.com/11ty/eleventy/issues/510#issuecomment-824104799

# This file does hijinx with the "pagination" system to generate many small pages from one set of data...
# and uses that do to redirects from some URLs to others.
# We use this to try to keep old links working.
#
# There's limited power to this approach (it only works for specific pages listed; it can't glob),
# but those are limitations inherent to an approach that works via static site gen, rather than via server configuration.
# The related upside of an approach that works via static site gen is the portability.
pagination:
  data: redirects
  size: 1
  alias: redirect
redirects:
  - {"from": "/resume/", "to": "/assets/files/Person_James_Resume.pdf"}
permalink: "{{ redirect.from }}"
layout: redirect.njk
---
