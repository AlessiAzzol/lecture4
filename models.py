import requests
import json

def main():
	title = input("Inserisci il titolo del film: ").replace(' ','+')
	res = requests.get(f"http://www.omdbapi.com/?t={title}&plot=full&apikey=fd98feff")
	movie = res.json()
	print(movie["Plot"])


if __name__=="__main__":
	main()