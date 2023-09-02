import requests
import json

def search(query):
    url = f'https://ac.cnstrc.com/autocomplete/{query.replace(" ", "%20")}?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=387bfa2f-e4f1-45ae-b367-c158a1d279c4&s=2&num_results_Products=25&num_results_Collections=20&_dt=1693651778790'

    html = requests.get(url=url)
    output = json.loads(html.text)

    return output['sections']['Products'][0]['value']


# Call the function with your quer
