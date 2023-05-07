export const getOperatorsAndVariables = (value) => {
  const variables = value.split(/[>]|[<]|[>=]|[<=]|[==]|[===]|[!=]|[!==]/);
  const operators = value.split(/[^>|<|>=|<=|==|===|!=|!==]/).filter((e) => e);
  return { variables, operators };
};
