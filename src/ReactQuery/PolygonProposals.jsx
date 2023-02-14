import { useQuery } from "./useQuery";
import { ProposalTable } from "../RawQuery/Proposals";

export const PolygonProposals = () => {
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
  
    const chainId = "eip155:137";
  
    const { data, isLoading } = useQuery({
      query: ProposalsDocument,
      variables: {
        chainId,
        pagination: { limit: 8, offset: 0 },
        sort: { field: "START_BLOCK", order: "DESC" },
      },
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
        <h2>Polygon Proposals</h2>
        {proposals.length && (
          <ProposalTable proposals={proposals}></ProposalTable>
        )}
      </div>
    );
  };
  
  