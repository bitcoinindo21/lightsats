export enum PageRoutes {
  home = "/",
  dashboard = "/dashboard",
  tips = "/tips",
  newTip = "/tips/new",
  fundTip = "/tips/fund",
  withdraw = "/withdraw",
  tipperWithdraw = "/withdraw?flow=tipper",
  profile = "/profile",
  logout = "/logout",
  leaderboard = "/leaderboard",
  emailSignin = "/auth/signin/email",
  verifySignin = "/verify",
  lnurlAuthSignin = "/auth/signin/lnurl",
  checkEmail = "/auth/signin/email-sent",
  checkPhone = "/auth/signin/sms-sent",
  journeyClaimed = "/journey/claimed",
  journeyBitcoin = "/journey/bitcoin",
  journeySelectWallet = "/journey/wallet",
  journeyCongratulations = "/journey/congratulations",
  guide = "/guide",
  // TODO: remove below routes - map categories and make each category have a description
  guideSpend = "/guide/spend",
  guideEarn = "/guide/earn",
  guideBuy = "/guide/buy",
  guideSave = "/guide/save",
  guideSend = "/guide/send",
  guideTip = "/guide/tip",
  guideDonate = "/guide/donate",
  guideLearn = "/guide/learn",
  guideWallets = "/guide/wallets",
  admin = "/admin",
  adminUsers = "/admin/users",
  adminTips = "/admin/tips",
  adminWithdrawals = "/admin/withdrawals",
  adminWithdrawalErrors = "/admin/errors/withdrawals",
  about = "/about",
  login = "/signin",
  features = "/features",
  users = "/users",
  notifications = "/notifications",
  leaderboards = "/leaderboards",
  newLeaderboard = "/leaderboards/new",
  tipGroups = "/tip-groups",
  adminTipGroups = "/admin/tip-groups",
}

export const bitcoinJourneyPages = [
  PageRoutes.journeyClaimed,
  PageRoutes.journeyBitcoin,
  PageRoutes.journeySelectWallet,
  PageRoutes.withdraw,
  PageRoutes.journeyCongratulations,
];
