"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveModuleAsync = resolveModuleAsync;
exports.resolveExtraBuildDependenciesAsync = resolveExtraBuildDependenciesAsync;
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
async function resolveModuleAsync(packageName, revision) {
    const devtoolsConfig = revision.config?.toJSON().devtools;
    if (devtoolsConfig == null) {
        return null;
    }
    return {
        packageName,
        packageRoot: revision.path,
        webpageRoot: resolveWebpageRoot(revision.path, devtoolsConfig.webpageRoot),
        cliExtensions: devtoolsConfig.cliExtensions,
    };
}
function resolveWebpageRoot(packageRoot, configured) {
    if (!configured) {
        return undefined;
    }
    const joined = path_1.default.join(packageRoot, configured);
    return (0, utils_1.isPathInside)(joined, packageRoot) ? joined : undefined;
}
async function resolveExtraBuildDependenciesAsync(_projectNativeRoot) {
    return null;
}
//# sourceMappingURL=devtools.js.map