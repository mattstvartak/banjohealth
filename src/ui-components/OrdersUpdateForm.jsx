/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Orders } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OrdersUpdateForm(props) {
  const {
    id: idProp,
    orders,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    teamMember: "",
    priority: undefined,
    team: undefined,
    dueDate: "",
  };
  const [teamMember, setTeamMember] = React.useState(initialValues.teamMember);
  const [priority, setPriority] = React.useState(initialValues.priority);
  const [team, setTeam] = React.useState(initialValues.team);
  const [dueDate, setDueDate] = React.useState(initialValues.dueDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ordersRecord
      ? { ...initialValues, ...ordersRecord }
      : initialValues;
    setTeamMember(cleanValues.teamMember);
    setPriority(cleanValues.priority);
    setTeam(cleanValues.team);
    setDueDate(cleanValues.dueDate);
    setErrors({});
  };
  const [ordersRecord, setOrdersRecord] = React.useState(orders);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Orders, idProp) : orders;
      setOrdersRecord(record);
    };
    queryData();
  }, [idProp, orders]);
  React.useEffect(resetStateValues, [ordersRecord]);
  const validations = {
    teamMember: [],
    priority: [],
    team: [],
    dueDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          teamMember,
          priority,
          team,
          dueDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Orders.copyOf(ordersRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OrdersUpdateForm")}
      {...rest}
    >
      <TextField
        label="Team member"
        isRequired={false}
        isReadOnly={false}
        value={teamMember}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamMember: value,
              priority,
              team,
              dueDate,
            };
            const result = onChange(modelFields);
            value = result?.teamMember ?? value;
          }
          if (errors.teamMember?.hasError) {
            runValidationTasks("teamMember", value);
          }
          setTeamMember(value);
        }}
        onBlur={() => runValidationTasks("teamMember", teamMember)}
        errorMessage={errors.teamMember?.errorMessage}
        hasError={errors.teamMember?.hasError}
        {...getOverrideProps(overrides, "teamMember")}
      ></TextField>
      <SelectField
        label="Priority"
        placeholder="Please select an option"
        isDisabled={false}
        value={priority}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamMember,
              priority: value,
              team,
              dueDate,
            };
            const result = onChange(modelFields);
            value = result?.priority ?? value;
          }
          if (errors.priority?.hasError) {
            runValidationTasks("priority", value);
          }
          setPriority(value);
        }}
        onBlur={() => runValidationTasks("priority", priority)}
        errorMessage={errors.priority?.errorMessage}
        hasError={errors.priority?.hasError}
        {...getOverrideProps(overrides, "priority")}
      >
        <option
          children="High"
          value="HIGH"
          {...getOverrideProps(overrides, "priorityoption0")}
        ></option>
        <option
          children="Medium"
          value="MEDIUM"
          {...getOverrideProps(overrides, "priorityoption1")}
        ></option>
        <option
          children="Llow"
          value="LLOW"
          {...getOverrideProps(overrides, "priorityoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Team"
        placeholder="Please select an option"
        isDisabled={false}
        value={team}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamMember,
              priority,
              team: value,
              dueDate,
            };
            const result = onChange(modelFields);
            value = result?.team ?? value;
          }
          if (errors.team?.hasError) {
            runValidationTasks("team", value);
          }
          setTeam(value);
        }}
        onBlur={() => runValidationTasks("team", team)}
        errorMessage={errors.team?.errorMessage}
        hasError={errors.team?.hasError}
        {...getOverrideProps(overrides, "team")}
      >
        <option
          children="Red"
          value="RED"
          {...getOverrideProps(overrides, "teamoption0")}
        ></option>
        <option
          children="Green"
          value="GREEN"
          {...getOverrideProps(overrides, "teamoption1")}
        ></option>
        <option
          children="Blue"
          value="BLUE"
          {...getOverrideProps(overrides, "teamoption2")}
        ></option>
        <option
          children="Yellow"
          value="YELLOW"
          {...getOverrideProps(overrides, "teamoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Due date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dueDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              teamMember,
              priority,
              team,
              dueDate: value,
            };
            const result = onChange(modelFields);
            value = result?.dueDate ?? value;
          }
          if (errors.dueDate?.hasError) {
            runValidationTasks("dueDate", value);
          }
          setDueDate(value);
        }}
        onBlur={() => runValidationTasks("dueDate", dueDate)}
        errorMessage={errors.dueDate?.errorMessage}
        hasError={errors.dueDate?.hasError}
        {...getOverrideProps(overrides, "dueDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || orders)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || orders) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
