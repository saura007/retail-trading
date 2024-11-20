export interface AssetAllocation {
    assetName: string;
    allocation: number;
}

export interface PortfolioData {
    userId: string;
    portfolioValue: number;
    assetAllocations: AssetAllocation[];
}