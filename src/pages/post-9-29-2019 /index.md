---
title: SQLAlchemy update or delete on table violates foreign key constraint
date: "2019-09-29T04:12:03.284Z"
---

### How to delete a specific parent from a table and all its children in another table. 

SQL tables
```
| Parent      |
| ----------- |
| id          |

| Child                     |
| ------------------------- |
| id                        |
| parent_id (foreign key)   |
```

In order to remove a parent from the parents table and all its child, requires you to solve violation on foreign key constraints. We can solve this by cascading.

### Solution
 child = relationship(Child, cascade="all,delete", backref="parent")
```
class Parent(db.Model):
    __tablename__ = 'parent'
    id = db.Column(db.Integer, primary_key=True)
    child = relationship(Child, cascade="all,delete", backref="parent")

class Child(db.Model):
    __tablename__ = 'child'
    id = db.Column(db.Integer, primary_key=True)
    parent_id = db.Column(db.Integer, db.ForeignKey('parent.id'))
```
