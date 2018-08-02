/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export class RemoveProjectRequest {
    constructor (filePath: string) {
        this.filePath = filePath;
    }

    public readonly filePath:  string;
}