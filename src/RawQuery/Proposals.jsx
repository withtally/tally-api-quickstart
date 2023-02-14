import { useEffect, useState } from "react";
import { fetcher } from "./fetcher";

export const Proposals = () => {
    const [proposals, setProposals] = useState(undefined);
    const ProposalsDocument = `#graphql
  
      query Proposals($chainId: ChainID!, $pagination: Pagination, $sort: ProposalSort) {
    proposals(chainId: $chainId, pagination: $pagination, sort: $sort) {
      id
      title
      eta
      governor {
        name
      }
      voteStats {
        support
        weight
        votes
        percent
      }
    }
  }
      `;
  
    const chainId = "eip155:1";
  
    useEffect(() => {
      fetcher({
        query: ProposalsDocument,
        variables: {
          chainId,
          pagination: { limit: 8, offset: 0 },
          sort: { field: "START_BLOCK", order: "DESC" },
        },
      }).then((data) => {
        const { proposals } = data ?? [];
        setProposals(proposals);
      });
    }, []);
  
    if (!proposals)
      return (
        <div className="tableLoading">
          <b>loading...</b>
        </div>
      );
  
    return (
      <div className="governorList">
        <h2>Mainnet ETH Proposals</h2>
        {proposals.length && (
          <ProposalTable proposals={proposals}></ProposalTable>
        )}
      </div>
    );
  };

  export const ProposalTable = ({ proposals }) => {
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