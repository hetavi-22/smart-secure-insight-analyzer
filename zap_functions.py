#!/usr/bin/env python
import time
import pandas as pd
import numpy as np
from zapv2 import ZAPv2
from pprint import pprint
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix


# The URL of the application to be tested

def connection():
  # target = 'https://www.google.com'
  # Change to match the API key set in ZAP, or use None if the API key is disabled
  apiKey = 't2r2vl7lq0qr02k4up9gpn9l3'
  # apiKey='qiiutul4utrfub1b8veqs50bk0'

  # By default ZAP API client will connect to port 8080
  # zap = ZAPv2(apikey=apiKey)
  return ZAPv2(apikey=apiKey, proxies={'http': 'http://127.0.0.1:8080', 'https': 'http://127.0.0.1:8080'})

# Use the line below if ZAP is not listening on port 8080, for example, if listening on port 8090

def attack_target(target, zap):
  try:
    zap.urlopen(target)
  except Exception as e:
    print(e)

  print('Spidering target {}'.format(target))
  # The scan returns a scan id to support concurrent scanning
  scanID = zap.spider.scan(url=target)
  while int(zap.spider.status(scanID)) < 100:
      # Poll the status until it completes
      print('Spider progress %: {}'.format(zap.spider.status(scanID)))
      time.sleep(1)

  print('Spider has completed!')
  # Prints the URLs the spider has crawled
  # print('\n'.join(map(str, zap.spider.results(scanID))))
  return ('\n'.join(map(str, zap.spider.results(scanID))))
  # If required post process the spider results


def fetch_alerts(zap):
    # Read attacks dataset from CSV file
    alert_results = zap.core.alerts()
    alert_list = []
    for alert in alert_results:
        alert_info = {
            'alert': alert['alert'],
            'risk': alert['risk'],
            'confidence': alert['confidence'],
            'cweid': alert['cweid'],
            'wascid': alert['wascid']
        }
        alert_list.append(alert_info)
    data1 = pd.read_csv("alert_Mix.csv")
    data = data1.drop("alert", axis = 1)
    data = data.drop_duplicates()

    # testing_data = pd.DataFrame(alert_list)
    # testing_data.to_csv('testing_data.csv', index=False)
    testing_data = pd.read_csv('testing_data.csv')
    correlation_data = pd.read_csv("cwe_id_data.csv")

    testing_data = testing_data.drop_duplicates()
    test = testing_data[["confidence","cweid","wascid"]]
    test = pd.get_dummies(test)
    test_Y = testing_data[["risk"]]

    # Assuming 'risk' is the target variable
    X = data.drop('risk', axis=1)
    y = data['risk']

    # Perform one-hot encoding on categorical columns
    X_encoded = pd.get_dummies(X)
    #Preprocessing test data
    test["confidence_Low"] = 0
    
    #Alerts present in train dataset
    freqX = data1.groupby('alert').size()
    #Alerts present in test dataset
    freq = testing_data.groupby("alert").size()
    test= test[["cweid","wascid","confidence_High","confidence_Low","confidence_Medium"]]
    def correlate(cwe_CD, pred_cwe):
      display = []
      count = 0
      for cwe in pred_cwe.unique():
        if cwe in cwe_CD.tolist():
          i = cwe_CD.tolist().index(cwe)
          display.append(correlation_data.iloc[i])
          count +=1 
      return display,count

    # Split the dataset into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.1, random_state=42)

    # Create a Random Forest Classifier
    rf_model = RandomForestClassifier(n_estimators=200, random_state=42)

    # Train the model
    rf_model.fit(X_train, y_train)

    # Predict on the test set
    y_pred = rf_model.predict(test)
    # print(y_pred)
    # print(test_Y)

    # Evaluate accuracy
    accuracy = accuracy_score(test_Y, y_pred)
    print(f'Accuracy: {accuracy}')

    # Classification Report
    print('Classification Report:\n', classification_report(test_Y, y_pred))

    # Confusion Matrix
    conf_matrix = confusion_matrix(test_Y, y_pred)
    print('Confusion Matrix:\n', conf_matrix)

    # 
    #pprint(correlate(correlation_data['cweid'],test['cweid']))
    output = correlate(correlation_data['cweid'],test['cweid'])
    pprint(output)

    # output, count = correlate(correlation_data['cweid'], test['cweid'])
    # json_output = {"alert_data": output, "count": count}
    # return json.dumps(json_output)
    
    # return {"alert_data": output}

   


# zap = connection()
# attack_target("https://public-firing-range.appspot.com", zap)
# print(fetch_alerts(zap))
