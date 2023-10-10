# JS Classes
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Check out the class in `index.js`

It already contains the properties `firstname` and `lastname`

## 1. Full name

Create the instance property `fullname` and `email` in the `Employee` class. Given a person's first and last name:

Form `fullname` by simply joining the first and last name together, separated by a single space.

## 2. Email
Create the instance property `email` in the `Employee` class. Given a person's first and last name:

Form `email` by joining the first and last name together with a `.` in between, and follow it with `@company.com` at the end. Make sure the entire email is in lowercase.

## Examples

```
emp1 = new Employee("John", "Smith")
emp1.fullname ➞ "John Smith"

emp2 = new Employee("Mary",  "Sue")
emp2.email ➞ "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker")
emp3.firstname ➞ "Antony"

```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Employee class

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `Employee` is defined |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `Employee` is a class |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Instance of `Employee` class has `firstname` property |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `firstname` property contains value passed to the class as first argument |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Instance of `Employee` class has `lastname` property |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `lastname` property contains value passed to the class as second argument |

### 1. Full name

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Instance of class `Eployee` should have `fullname` property |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `fullname` property should contain first and last name values passed to the class, divided by single space |

### 2. Email

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Instance of class `Eployee` should have `email` property |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | `email` property should contain first and last name values passed to the class, divided by `.`, followed by `@company.com` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Classes-Exercise-1)


[//]: # (autograding info end)