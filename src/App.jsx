import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { useGovernorsQuery, useProposalsQuery } from "./hooks";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider contextSharing={true} client={queryClient}>
      <div className="App">
        <Header />
        <Governors />
        <Proposals />
      </div>
    </QueryClientProvider>
  );
}

const Header = () => {
  return (
    <div>
      <h1>Tally API Quickstart</h1>
    </div>
  );
};

const Governors = () => {
  const chainIds = ["eip155:1"];

  const { data, isLoading } = useGovernorsQuery({
    chainIds,
    pagination: { limit: 12, offset: 0 },
    sort: { field: "TOTAL_PROPOSALS", order: "DESC" },
  });

  const { governors } = data ?? [];

  if (isLoading)
    return (
      <div className="tableLoading">
        <b>loading...</b>
      </div>
    );

  return (
    <div className="governorList">
      <h2>Governors</h2>
      {governors.length && (
        <GovernorsTable governors={governors}></GovernorsTable>
      )}
    </div>
  );
};

const GovernorsTable = ({ governors }) => {
  return (
    <table className="styledTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Delegates</th>
          <th>Proposals</th>
        </tr>
      </thead>
      <tbody>
        {governors.map((governor, index) => {
          const { delegates } = governor ?? [];

          const totalDelegates = delegates.length;

          return (
            <tr key={`governor-row-${index}`}>
              <td>{governor.name}</td>
              <td>{totalDelegates}</td>
              <td>{governor.proposalStats.total}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Proposals = () => {
  const chainId = "eip155:1";

  const { data, isLoading } = useProposalsQuery({
    chainId,
    pagination: { limit: 12, offset: 0 },
    sort: {field: "START_BLOCK", order: "DESC" }
  });

  const { proposals } = data ?? [];


  if (isLoading)
    return (
      <div className="tableLoading">
        <b>loading...</b>
      </div>
    );

  return (
    <div className="governorList">
      <h2>Proposals</h2>
      {proposals.length && (
        <ProposalTable proposals={proposals}></ProposalTable>
      )}
    </div>
  );
};

const ProposalTable = ({ proposals }) => {
  return (
    <table className="styledTable">
      <thead>
        <tr>
          <th>Title</th>
          <th>Governor</th>
          <th>Votes For (%)</th>
        </tr>
      </thead>
      <tbody>
        {proposals.map((proposal, index) => {
          const forPercent = proposal.voteStats[0].percent.toFixed();
          const againstPercent = proposal.voteStats[1].percent.toFixed();

          return (
            <tr key={`proposal-row-${index}`}>
              <td>{proposal.title}</td>
              <td>{proposal.governor.name}</td>
              <td>{forPercent}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;