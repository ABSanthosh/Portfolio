import os
import csv
import json
from datetime import datetime

data_by_year_month = {}

csv_folder = "./reviews"

def process_row(row):
    version = row["App Version Name"]
    lang = row["Reviewer Language"]
    device = row["Device"]
    date = row["Review Submit Date and Time"]
    rating = row["Star Rating"]
    review = row["Review Text"]
    reply = row["Developer Reply Text"]

    return {
        "version": version,
        "lang": lang,
        "device": device,
        "date": date,
        "rating": rating,
        "review": review,
        "reply": reply
    }

def get_month_name(month_number):
    return datetime.strptime(month_number, "%m").strftime("%B")

for filename in os.listdir(csv_folder):
    if filename.endswith(".csv"):
        year_month = filename.split("_")[-1].split(".")[0]
        year = year_month[:4]
        month = get_month_name(year_month[4:])  # Get month name

        if year not in data_by_year_month:
            data_by_year_month[year] = {}

        if month not in data_by_year_month[year]:
            data_by_year_month[year][month] = []

        file_path = os.path.join(csv_folder, filename)

        with open(file_path, "r", encoding="utf-16le", newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                data = process_row(row)
                data_by_year_month[year][month].append(data)

output_file = "reviews_data.json"

with open(output_file, "w", encoding="utf-8") as jsonfile:
    json.dump(data_by_year_month, jsonfile, ensure_ascii=False, indent=4)

print("Data has been successfully written to", output_file)
