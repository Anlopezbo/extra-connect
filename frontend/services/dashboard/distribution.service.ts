import { distributionMock } from "@/mocks/dashboard/distribution.mock";

export async function getDistributionData() {
  return Promise.resolve(distributionMock);
}
