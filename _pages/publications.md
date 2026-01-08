---
layout: page
permalink: /publications/
title: Publications
description: Publications by categories in reversed chronological order.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">
  {% bibliography %}
</div>

{% if site.scholar.entries == empty %}
<p><em>Oops there's nothing here yet, maybe check tomorrow?</em></p>
{% endif %}
