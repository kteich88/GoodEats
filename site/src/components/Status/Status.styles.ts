import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";
import { theme } from "../../infrastructure/theme/helpers";
import { spacing } from "../../infrastructure/theme/spacing";

export const StatusContainer = styled.Text`
  margin-bottom: ${spacing.md};
`;

export const Open = styled.Text`
  color: ${colors.ui.success};
  font-weight: ${theme.fontWeights.bold};
`;

export const Closed = styled.Text`
  color: ${colors.ui.error};
  font-weight: ${theme.fontWeights.bold};
`;
export const ClosedTemporarily = styled.Text`
  font-weight: ${theme.fontWeights.bold};
`;