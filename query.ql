echo '
data: [out:json];
area(id:3600304716)->.searchArea;
(
  node["aeroway"="terminal"](area.searchArea);
  way["aeroway"="terminal"](area.searchArea);
  relation["aeroway"="terminal"](area.searchArea);
);
out body;
>;
out skel qt;
'|query-overpass