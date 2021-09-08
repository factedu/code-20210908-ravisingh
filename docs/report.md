# Medical Report
BMI and Helth Risk Report of Users

## Version: 1.0.0

**License:** [MIT](https://opensource.org/licenses/MIT)

### /

#### GET
##### Summary

List all report

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | List of BMI and Risk of Users |
| default | unexpected error |

### Models

#### Report

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | long |  | Yes |
| name | string |  | Yes |
| tag | string |  | No |

#### Reports

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Reports | array |  |  |

#### Error

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer |  | Yes |
| message | string |  | Yes |
