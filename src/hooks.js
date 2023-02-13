import { useQuery } from "@tanstack/react-query";
import { useGraphQLCodegen } from "../autogen/useGraphQLCodegen";
var AccountActivitySortField = /* @__PURE__ */ ((AccountActivitySortField2) => {
  AccountActivitySortField2["BlockTimestamp"] = "BLOCK_TIMESTAMP";
  return AccountActivitySortField2;
})(AccountActivitySortField || {});
var DelegateSortField = /* @__PURE__ */ ((DelegateSortField2) => {
  DelegateSortField2["Created"] = "CREATED";
  DelegateSortField2["Delegations"] = "DELEGATIONS";
  DelegateSortField2["HasDelegateStatement"] = "HAS_DELEGATE_STATEMENT";
  DelegateSortField2["HasEns"] = "HAS_ENS";
  DelegateSortField2["ProposalsCreated"] = "PROPOSALS_CREATED";
  DelegateSortField2["TokensOwned"] = "TOKENS_OWNED";
  DelegateSortField2["Updated"] = "UPDATED";
  DelegateSortField2["VotingWeight"] = "VOTING_WEIGHT";
  return DelegateSortField2;
})(DelegateSortField || {});
var DelegateStatementSource = /* @__PURE__ */ ((DelegateStatementSource2) => {
  DelegateStatementSource2["Script"] = "SCRIPT";
  DelegateStatementSource2["User"] = "USER";
  return DelegateStatementSource2;
})(DelegateStatementSource || {});
var DelegationWeightChangeSortField = /* @__PURE__ */ ((DelegationWeightChangeSortField2) => {
  DelegationWeightChangeSortField2["Created"] = "CREATED";
  DelegationWeightChangeSortField2["NetChange"] = "NET_CHANGE";
  DelegationWeightChangeSortField2["NewBalance"] = "NEW_BALANCE";
  DelegationWeightChangeSortField2["OldBalance"] = "OLD_BALANCE";
  return DelegationWeightChangeSortField2;
})(DelegationWeightChangeSortField || {});
var FeatureOrderField = /* @__PURE__ */ ((FeatureOrderField2) => {
  FeatureOrderField2["Name"] = "NAME";
  return FeatureOrderField2;
})(FeatureOrderField || {});
var GnosisStatusChangeType = /* @__PURE__ */ ((GnosisStatusChangeType2) => {
  GnosisStatusChangeType2["Executed"] = "EXECUTED";
  GnosisStatusChangeType2["Submitted"] = "SUBMITTED";
  return GnosisStatusChangeType2;
})(GnosisStatusChangeType || {});
var GovernanceSortField = /* @__PURE__ */ ((GovernanceSortField2) => {
  GovernanceSortField2["ActiveProposals"] = "ACTIVE_PROPOSALS";
  GovernanceSortField2["TotalProposals"] = "TOTAL_PROPOSALS";
  return GovernanceSortField2;
})(GovernanceSortField || {});
var GovernanceType = /* @__PURE__ */ ((GovernanceType2) => {
  GovernanceType2["Aave"] = "AAVE";
  GovernanceType2["Governoralpha"] = "GOVERNORALPHA";
  GovernanceType2["Governorbravo"] = "GOVERNORBRAVO";
  GovernanceType2["Openzeppelingovernor"] = "OPENZEPPELINGOVERNOR";
  return GovernanceType2;
})(GovernanceType || {});
var GovernorSortField = /* @__PURE__ */ ((GovernorSortField2) => {
  GovernorSortField2["ActiveProposals"] = "ACTIVE_PROPOSALS";
  GovernorSortField2["TotalProposals"] = "TOTAL_PROPOSALS";
  return GovernorSortField2;
})(GovernorSortField || {});
var GovernorType = /* @__PURE__ */ ((GovernorType2) => {
  GovernorType2["Aave"] = "AAVE";
  GovernorType2["Governoralpha"] = "GOVERNORALPHA";
  GovernorType2["Governorbravo"] = "GOVERNORBRAVO";
  GovernorType2["Openzeppelingovernor"] = "OPENZEPPELINGOVERNOR";
  return GovernorType2;
})(GovernorType || {});
var MemberSortField = /* @__PURE__ */ ((MemberSortField2) => {
  MemberSortField2["PollsVoteCount"] = "POLLS_VOTE_COUNT";
  return MemberSortField2;
})(MemberSortField || {});
var MultiGovernanceSupport = /* @__PURE__ */ ((MultiGovernanceSupport2) => {
  MultiGovernanceSupport2["MultiGovPrimary"] = "MULTI_GOV_PRIMARY";
  MultiGovernanceSupport2["MultiGovSecondary"] = "MULTI_GOV_SECONDARY";
  MultiGovernanceSupport2["SingleGov"] = "SINGLE_GOV";
  return MultiGovernanceSupport2;
})(MultiGovernanceSupport || {});
var OrderDirection = /* @__PURE__ */ ((OrderDirection2) => {
  OrderDirection2["Asc"] = "ASC";
  OrderDirection2["Desc"] = "DESC";
  return OrderDirection2;
})(OrderDirection || {});
var OrgUxVersion = /* @__PURE__ */ ((OrgUxVersion2) => {
  OrgUxVersion2["Governor"] = "governor";
  OrgUxVersion2["Tokenless"] = "tokenless";
  return OrgUxVersion2;
})(OrgUxVersion || {});
var OrganizationRole = /* @__PURE__ */ ((OrganizationRole2) => {
  OrganizationRole2["Admin"] = "ADMIN";
  OrganizationRole2["Member"] = "MEMBER";
  OrganizationRole2["Superadmin"] = "SUPERADMIN";
  return OrganizationRole2;
})(OrganizationRole || {});
var OrganizationSortField = /* @__PURE__ */ ((OrganizationSortField2) => {
  OrganizationSortField2["Id"] = "ID";
  OrganizationSortField2["Name"] = "NAME";
  return OrganizationSortField2;
})(OrganizationSortField || {});
var PollStatus = /* @__PURE__ */ ((PollStatus2) => {
  PollStatus2["Active"] = "ACTIVE";
  PollStatus2["Draft"] = "DRAFT";
  PollStatus2["Ended"] = "ENDED";
  return PollStatus2;
})(PollStatus || {});
var ProposalActionType = /* @__PURE__ */ ((ProposalActionType2) => {
  ProposalActionType2["Cancel"] = "CANCEL";
  ProposalActionType2["Execute"] = "EXECUTE";
  ProposalActionType2["Queue"] = "QUEUE";
  return ProposalActionType2;
})(ProposalActionType || {});
var ProposalSortField = /* @__PURE__ */ ((ProposalSortField2) => {
  ProposalSortField2["CreatedAt"] = "CREATED_AT";
  ProposalSortField2["EndBlock"] = "END_BLOCK";
  ProposalSortField2["ExecutionEta"] = "EXECUTION_ETA";
  ProposalSortField2["StartBlock"] = "START_BLOCK";
  return ProposalSortField2;
})(ProposalSortField || {});
var ProposalStatusType = /* @__PURE__ */ ((ProposalStatusType2) => {
  ProposalStatusType2["Active"] = "ACTIVE";
  ProposalStatusType2["Canceled"] = "CANCELED";
  ProposalStatusType2["Defeated"] = "DEFEATED";
  ProposalStatusType2["Executed"] = "EXECUTED";
  ProposalStatusType2["Expired"] = "EXPIRED";
  ProposalStatusType2["Pending"] = "PENDING";
  ProposalStatusType2["Queued"] = "QUEUED";
  ProposalStatusType2["Succeeded"] = "SUCCEEDED";
  return ProposalStatusType2;
})(ProposalStatusType || {});
var Recipe = /* @__PURE__ */ ((Recipe2) => {
  Recipe2["Custom"] = "CUSTOM";
  Recipe2["Empty"] = "EMPTY";
  Recipe2["OrcaManagePod"] = "ORCA_MANAGE_POD";
  Recipe2["TransferErc_20"] = "TRANSFER_ERC_20";
  Recipe2["TransferNativeAsset"] = "TRANSFER_NATIVE_ASSET";
  return Recipe2;
})(Recipe || {});
var Role = /* @__PURE__ */ ((Role2) => {
  Role2["Admin"] = "ADMIN";
  Role2["User"] = "USER";
  return Role2;
})(Role || {});
var SimulationStatus = /* @__PURE__ */ ((SimulationStatus2) => {
  SimulationStatus2["Failed"] = "failed";
  SimulationStatus2["Success"] = "success";
  return SimulationStatus2;
})(SimulationStatus || {});
var SortOrder = /* @__PURE__ */ ((SortOrder2) => {
  SortOrder2["Asc"] = "ASC";
  SortOrder2["Desc"] = "DESC";
  return SortOrder2;
})(SortOrder || {});
var SupportType = /* @__PURE__ */ ((SupportType2) => {
  SupportType2["Abstain"] = "ABSTAIN";
  SupportType2["Against"] = "AGAINST";
  SupportType2["For"] = "FOR";
  return SupportType2;
})(SupportType || {});
var TallyProposalSortField = /* @__PURE__ */ ((TallyProposalSortField2) => {
  TallyProposalSortField2["CreatedAt"] = "CREATED_AT";
  return TallyProposalSortField2;
})(TallyProposalSortField || {});
var TallyProposalStatus = /* @__PURE__ */ ((TallyProposalStatus2) => {
  TallyProposalStatus2["Confirmed"] = "CONFIRMED";
  TallyProposalStatus2["Draft"] = "DRAFT";
  TallyProposalStatus2["Failed"] = "FAILED";
  TallyProposalStatus2["Submitted"] = "SUBMITTED";
  return TallyProposalStatus2;
})(TallyProposalStatus || {});
var TimeInterval = /* @__PURE__ */ ((TimeInterval2) => {
  TimeInterval2["All"] = "ALL";
  TimeInterval2["Day"] = "DAY";
  TimeInterval2["Hour"] = "HOUR";
  TimeInterval2["Month"] = "MONTH";
  TimeInterval2["Quarter"] = "QUARTER";
  TimeInterval2["Week"] = "WEEK";
  TimeInterval2["Year"] = "YEAR";
  return TimeInterval2;
})(TimeInterval || {});
var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2["Erc20"] = "ERC20";
  TokenType2["Erc20Aave"] = "ERC20AAVE";
  TokenType2["Erc721"] = "ERC721";
  return TokenType2;
})(TokenType || {});
var VoteSortField = /* @__PURE__ */ ((VoteSortField2) => {
  VoteSortField2["Block"] = "BLOCK";
  VoteSortField2["Created"] = "CREATED";
  VoteSortField2["Weight"] = "WEIGHT";
  return VoteSortField2;
})(VoteSortField || {});
var VotingPowerChangeSortField = /* @__PURE__ */ ((VotingPowerChangeSortField2) => {
  VotingPowerChangeSortField2["Created"] = "CREATED";
  VotingPowerChangeSortField2["NetChange"] = "NET_CHANGE";
  VotingPowerChangeSortField2["NewBalance"] = "NEW_BALANCE";
  VotingPowerChangeSortField2["OldBalance"] = "OLD_BALANCE";
  return VotingPowerChangeSortField2;
})(VotingPowerChangeSortField || {});
const GovernorsDocument = `
    query Governors($chainIds: [ChainID!], $pagination: Pagination, $sort: GovernorSort) {
  governors(chainIds: $chainIds, pagination: $pagination, sort: $sort) {
    id
    name
    delegates {
      account {
        id
      }
    }
    proposalStats {
      total
      active
    }
  }
}
    `;
const useGovernorsQuery = (variables, options) => useQuery(
  variables === void 0 ? ["Governors"] : ["Governors", variables],
  useGraphQLCodegen(GovernorsDocument).bind(null, variables),
  options
);
export {
  AccountActivitySortField,
  DelegateSortField,
  DelegateStatementSource,
  DelegationWeightChangeSortField,
  FeatureOrderField,
  GnosisStatusChangeType,
  GovernanceSortField,
  GovernanceType,
  GovernorSortField,
  GovernorType,
  GovernorsDocument,
  MemberSortField,
  MultiGovernanceSupport,
  OrderDirection,
  OrgUxVersion,
  OrganizationRole,
  OrganizationSortField,
  PollStatus,
  ProposalActionType,
  ProposalSortField,
  ProposalStatusType,
  Recipe,
  Role,
  SimulationStatus,
  SortOrder,
  SupportType,
  TallyProposalSortField,
  TallyProposalStatus,
  TimeInterval,
  TokenType,
  VoteSortField,
  VotingPowerChangeSortField,
  useGovernorsQuery
};
