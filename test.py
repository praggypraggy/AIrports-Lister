import requests
import json
overpass_url = "https://overpass.kumi.systems/api/interpreter"
overpass_query = """
[out:json];area["ISO3166-1"="DE"][admin_level=2];(node["amenity"="biergarten"](area);way["amenity"="biergarten"](area);rel["amenity"="biergarten"](area););out center;"""
response = requests.get(overpass_url, 
                        params={'data': overpass_query})
data = response.json()
print(response)