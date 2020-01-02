![Pinpoint](../.github/logo.svg )

# Front-End Developer Test

This challenge is meant to gauge your ability to do the type of daily work expected of a member of the Front-End team. If you have any questions, please reach out to the hiring manager.

The `/instructions` directory contains additional items to help you complete this test.

## The Task

We are adding a new screen to an existing React web application. The screen allows a user to select a department/team in the breadcrumb, view a list of employees on that team, and then view details for each employee.

You have been provided a Photoshop file; the breadcrumb and list of employees is _production-ready_ design while the employee profile section is only a _wireframe_. You should do your best to mimic the existing design style when building out the profile section.

You have also been provided with three API endpoints to retrieve the necessary data.

### Data Sources

The following endpoints can be used:

|Content|URL|
|-|-|
|List of Teams|http://www.mocky.io/v2/5c9d99d133000056003f2385|
|List of Employees|http://www.mocky.io/v2/5ca00c403300006e00a87dba?team=XYZ|
|List of Recent Files|http://www.mocky.io/v2/5c9d99b13300005b003f2382?employee=XYZ|

Pass the appropriate parent ID to the request for any children. Note, though, that the content returned by the mock API will be the same.

Samples of the payloads are also included in this repository.

### Technology Stack

We've included the following libraries for your use:

* Axios — HTTP Requests
* LESS — Styling
* FontAwesome — Iconography

You will also find a theme file at `/less/variables.less`.

## FAQ

*Does my output have to be a pixel-perfect match to the Photoshop file?*

It should be as close as possible; note, however, that design files are sometimes inconsistent.

*Can I add other packages?*

Yes.

*Do you want me to comment my code?*

Comment your code as your normally would for this sort of project. Please do not feel like you have to add comments because this is a test.

*I have another question about direction...*

We're leaving things a bit vague on purpose. We want to see what decisions you make, and we want you to have room to run solo—which is what we'll expect of you if you're hired. Trust your judgement and move forward.

If you have a different type of question, please contact the hiring manager.
