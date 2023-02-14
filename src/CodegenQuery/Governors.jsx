import "./../App.css";
import { useGovernorsQuery } from "./hooks";

export const Governors = () => {
  const chainIds = ["eip155:1"];

  // The generated hook below encapsulates react-query to return the query response data,
  // along with errors and important states like isLoading and isSuccess.
  // You can learn more about this here: https://react-query-v3.tanstack.com/guides/queries

  const { data, isLoading } = useGovernorsQuery({
    chainIds,
    pagination: { limit: 8, offset: 0 },
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
      <h2>Mainnet ETH Governors</h2>
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
          <th>Voters</th>
          <th>Proposals</th>
        </tr>
      </thead>
      <tbody>
        {governors.map((governor, index) => {
          const [token] = governor.tokens;

          const totalVoters = token.stats.voters;

          return (
            <tr key={`governor-row-${index}`}>
              <td>{governor.name}</td>
              <td>{totalVoters}</td>
              <td>{governor.proposalStats.total}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
