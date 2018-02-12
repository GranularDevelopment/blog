---
title: Perceptron in Python 
date: "2018-02-11T22:12:03.284Z"
---
### A simple neural network called the perceptron

The perceptron is the simplest form of a neural network used for the classification of patterns said to be linearly separable.

### Show me the Code
```python

import numpy as np

X = np.array([
    [-2,4,-1],
    [4,1,-1],
    [1, 6, -1],
    [2, 4, -1],
    [6, 2, -1],

])

y = np.array([-1,-1,1,1,1])

def perceptron(X, Y):
    w = np.zeros(len(X[0]))
    eta = 1
    epochs = 20

    for t in range(epochs):
        for i, x in enumerate(X):
            if (np.dot(X[i], w)*Y[i]) <= 0:
                w = w + eta*X[i]*Y[i]

    return w

w = perceptron(X,y)
print(w)  
# Result: [  2.   3.  13.]
```

The code above uses the Stochastic Grandient Descent algorithm to help the perceptron learn. The sample data set
```python
y = np.array([-1,-1,1,1,1])
```
contains two negative elements and three positive elements. The goal of the perceptron is to determine that weights that will produce [-,-,+,+,+].

###Evaluation 
The weights are [2, 3, 13]. Lets check that perceptron is correct. 

Lets classify the samples in our data set by hand now, to check if the perceptron learned properly:

First sample (−2,4) is supposed to be negative:

    &nbsp;&nbsp;−2∗2+4∗3−13=sign(−5)=−1

Second sample (4,1) is supposed to be negative:

    &nbsp;&nbsp;4∗2+1∗3−13=sign(−2)=−1

Third sample (1,6) is supposed to be positive:

    &nbsp;&nbsp;1∗2+6∗3−13=sign(7)=+1

Fourth sample (2,4) is supposed to be positive:

    &nbsp;&nbsp;2∗2+4∗3−13=sign(3)=+1

Fifth sample (6,2) is supposed to be positive:

    &nbsp;&nbsp;6∗2+2∗3−13=sign(5)=+1

Lets define two sample tests to check how well our perceptron generalizes to unseen data:

The first test (2,2) is supposed to be negative:

    &nbsp;&nbsp;2∗2+2∗3−13=sign(−3)=−1

The second test sample (4,3) is supposed to be positive:

    &nbsp;&nbsp;4∗2+3∗3−13=sign(4)=+1

Both samples are classified right.

#Conclusion

There you go! A simple perceptron in python.