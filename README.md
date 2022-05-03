# TimeMachine
talk to historical figures in real-time using GPT-3 and Amazon Polly neural voice engine


## Executive Summary (still a work in progress and I imagine it will be for some time)

TimeMachine is a full-stack React + Django REST API application, leveraging OpenAI’s GPT-3 with prompt-programming to emulate various historical figures in a real-time chat format, and Amazon’s Boto3 SDK to generate voiced output from the responses, as well as allow users to provide voice input which is transcribed and sent as input to GPT-3 (designed to mimic as closely as possible the flow of an actual conversation, this transcribing part is not currently implemented).  Users are able to access all past conversations associated with their account and add notes to a particular conversation as well as set favorites, and additionally able to set individual response lines as favorites.  UI is designed using TailwindCSS in React.


