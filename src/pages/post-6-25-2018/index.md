---
title: Jenkins and Python 
date: "2018-06-25T04:12:03.284Z"
---

Continuous Integration with Jenkins and Python. 

#### Project Structure.
```python
Project/
 	|- app/
	|- python_unittest_xml/
	|- tests/
	 	|- test_api.py
	    |- test_basics.py
	    |- test_client.py
	    |- test_selenum.py
	    |- test_user_model.py
	|- manage.py
```
The structure is defined as follows. The 'Project/' happens to be a flask application, hence the 'app/' folder and 'manage.py' file. Create a folder called 'python_unittest_xml'. 
This is where Jenkins will read the results from your unit tests. Next create a folder called 'tests', and this is where you will create all your
your unit tests.

#### manage.py
My manage.py looks like this

```python

from flask_script import Manager, Shell

@manager.command
def test():
    """Run the unit tests."""
    import unittest
    import xmlrunner
    tests = unittest.TestLoader().discover('tests')
    xmlrunner.XMLTestRunner(output="./python_unittests_xml").run(tests)
```
As you can see we load the unittests from the 'tests' folder and save the output to 'python_unittests_xml'.

#### Jenkins 
This tutorial assumes you already have GitHub hooks setup.
There are two steps to this process. The first is to setup an Execute shell script under the Build tab.


![Alternate screenshot](/JenkinsBuild.png)

The second step is to have Jenkins read the XML created by the unit tests.
![Alternate screenshot](/PostBuild.png)
The end result should look like this.
![Alternate screenshot](/TestResult.png)