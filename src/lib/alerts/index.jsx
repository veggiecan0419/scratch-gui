import React from 'react';
import {FormattedMessage} from 'react-intl';
import keyMirror from 'keymirror';

import successImage from '../assets/icon--success.svg';

const AlertTypes = keyMirror({
    STANDARD: null,
    EXTENSION: null,
    INLINE: null
});

const AlertLevels = {
    SUCCESS: 'success',
    INFO: 'info',
    WARN: 'warn'
};

const alerts = [
    {
        alertId: 'createSuccess',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="New project created."
                description="Message indicating that project was successfully created"
                id="gui.alerts.createsuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 5
    },
    {
        alertId: 'createCopySuccess',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Project saved as a copy."
                description="Message indicating that project was successfully created"
                id="gui.alerts.createcopysuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 5
    },
    {
        alertId: 'createRemixSuccess',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Project saved as a remix."
                description="Message indicating that project was successfully created"
                id="gui.alerts.createremixsuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 5
    },
    {
        alertId: 'creating',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Creating new…"
                description="Message indicating that project is in process of creating"
                id="gui.alerts.creating"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'creatingCopy',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Copying project…"
                description="Message indicating that project is in process of copying"
                id="gui.alerts.creatingCopy"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'creatingRemix',
        alertType: AlertTypes.STANDARD,
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        content: (
            <FormattedMessage
                defaultMessage="Remixing project…"
                description="Message indicating that project is in process of remixing"
                id="gui.alerts.creatingRemix"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'creatingError',
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        closeButton: true,
        content: (
            <FormattedMessage
                defaultMessage="Could not create the project. Please try again!"
                description="Message indicating that project could not be created"
                id="gui.alerts.creatingError"
            />
        ),
        level: AlertLevels.WARN
    },
    {
        alertId: 'savingError',
        clearList: ['createSuccess', 'creating', 'createCopySuccess', 'creatingCopy',
            'createRemixSuccess', 'creatingRemix', 'saveSuccess', 'saving'],
        showDownload: true,
        showSaveNow: true,
        closeButton: false,
        content: (
            <FormattedMessage
                defaultMessage="Project could not save."
                description="Message indicating that project could not be saved"
                id="gui.alerts.savingError"
            />
        ),
        level: AlertLevels.WARN
    },
    {
        alertId: 'saveSuccess',
        alertType: AlertTypes.INLINE,
        clearList: ['saveSuccess', 'saving', 'savingError', 'twSaveToDiskSuccess'],
        content: (
            <FormattedMessage
                defaultMessage="Project saved."
                description="Message indicating that project was successfully saved"
                id="gui.alerts.savesuccess"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 3
    },
    {
        alertId: 'twSaveToDiskSuccess',
        alertType: AlertTypes.INLINE,
        clearList: ['saveSuccess', 'saving', 'savingError', 'twSaveToDiskSuccess'],
        content: (
            <FormattedMessage
                defaultMessage="Saved to your computer."
                description="Message indicating that project was successfully saved to the user's disk"
                id="tw.alerts.savedToDisk"
            />
        ),
        iconURL: successImage,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 3
    },
    {
        alertId: 'saving',
        alertType: AlertTypes.INLINE,
        clearList: ['saveSuccess', 'saving', 'savingError', 'twSaveToDiskSuccess'],
        content: (
            <FormattedMessage
                defaultMessage="Saving project…"
                description="Message indicating that project is in process of saving"
                id="gui.alerts.saving"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.INFO
    },
    {
        alertId: 'cloudInfo',
        alertType: AlertTypes.STANDARD,
        clearList: ['cloudInfo'],
        content: (
            <FormattedMessage
                defaultMessage="Please note, cloud variables only support numbers, not letters or symbols. {learnMoreLink}" // eslint-disable-line max-len
                description="Info about cloud variable limitations"
                id="gui.alerts.cloudInfo"
                values={{
                    learnMoreLink: (
                        <a
                            href="https://scratch.mit.edu/info/faq/#clouddata"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <FormattedMessage
                                defaultMessage="Learn more."
                                description="Link text to cloud var faq"
                                id="gui.alerts.cloudInfoLearnMore"
                            />
                        </a>
                    )
                }}
            />
        ),
        closeButton: true,
        level: AlertLevels.SUCCESS,
        maxDisplaySecs: 15
    },
    {
        alertId: 'importingAsset',
        alertType: AlertTypes.STANDARD,
        clearList: [],
        content: (
            <FormattedMessage
                defaultMessage="Importing…"
                description="Message indicating that project is in process of importing"
                id="gui.alerts.importing"
            />
        ),
        iconSpinner: true,
        level: AlertLevels.SUCCESS
    },
    {
        alertId: 'twWarning',
        alertType: AlertTypes.STANDARD,
        clearList: [],
        content: (
            <center>
                <div>
                    <FormattedMessage
                        defaultMessage="Important Reminders"
                        description="Header of the warning that appears when the editor is opened"
                        id="tw.alerts.warning.top"
                    />
                </div>
                <hr />
                <div>
                    <FormattedMessage
                        defaultMessage="Save your project often, otherwise you will {loseAllYourWork} when the project crashes."
                        description="Part of the warning that appears when the editor is opened"
                        id="tw.alerts.warning.saveOften"
                        values={{
                            loseAllYourWork: <i>
                                <FormattedMessage
                                    defaultMessage="irrecoverably lose all of your work"
                                    description="a harsh way to phrase losing all of one's work"
                                    id="tw.alerts.warning.saveOften.loseAllYourWork"
                                />
                            </i>
                        }}
                    />
                </div>
                <hr />
                <div>
                    <FormattedMessage
                        defaultMessage="Warp Timer has been enabled because you opened the editor. This fixes most crashes but hurts performance."
                        description="Part of the warning that appears when the editor is opened"
                        id="tw.alerts.warning.warpTimer"
                    />
                </div>
                <hr />
                <div>
                    <FormattedMessage
                        defaultMessage="Scripts may need to be restarted for changes to apply."
                        description="Part of the warning that appears when the editor is opened"
                        id="tw.alerts.warning.restartScripts"
                    />
                </div>
            </center>
        ),
        closeButton: true,
        level: AlertLevels.WARN
    },
    {
        alertId: 'twExtendedExtensionsWarning',
        alertType: AlertTypes.STANDARD,
        clearList: ['twExtendedExtensionsWarning'],
        content: (
            <FormattedMessage
                defaultMessage="This project uses blocks exclusive to TurboWarp. It will not work in Scratch and should not be uploaded to the Scratch website."
                description="Warning that this project uses blocks that will only work in TurboWarp"
                id="tw.alerts.extendedExtensionsWarning"
            />
        ),
        closeButton: true,
        level: AlertLevels.WARN
    }
];

export {
    alerts as default,
    AlertLevels,
    AlertTypes
};
