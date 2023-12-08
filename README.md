# Pong RL Agent  

## Actions
Up  
Down  

## State Space
210x160x3 Image Frame  

## Rewards  
Point Win: +1  
Point Lose: -1  

## DQN Architecture
6400 Units -> 1  
Input is Lineated 80x80 preprocessed image  

## Trained Agent Gameplay  
After training for 7-8 hours, the agent is able to score around 10-15 points but not win. With more training, the agent will be able to beat computer  

[![Watch the video](https://img.youtube.com/vi/EleadxMK880/hqdefault.jpg)](https://www.youtube.com/embed/EleadxMK880)

## Code Explanation
[![Watch the video](https://img.youtube.com/vi/HR3dgTOkfIU/hqdefault.jpg)](https://www.youtube.com/embed/HR3dgTOkfIU)

## Weights  
[Trained DQN Weights ](weights/og_weight_test.keras)