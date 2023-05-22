import React from 'react';
import {Accordion, AmountControl, Badge, Bubble, Button, Calendar, Checkbox, ColorPicker, ColorScheme, ComboBox, ContextMenu, DateInfo, EmojiInput, FileInput, FilterButton, FormattedInput, Icon, ImageAccordion, Input, List, ListItem, OpeningTimes, PersonFinder, PositionInput, ProgressBar, RadioButton, RfidInput, ScrollView, SearchBox, SelectButton, SelectItem, SelectList, SetupWizard, SetupWizardItem, Slider, SliderButton, SmallWaitCursor, TagInput, TextArea, TextString, Tooltip, VerificationIcon} from 'chayns-components';

const App = () => 
        <div>
            <h1>Hi! Welcome to your newly created chayns application!</h1>
            <Accordion head = "Component">
                <Badge>2</Badge>
                <AmountControl />
                {/* <Bubble /> */}
                <Button>Clicker</Button>
                <Calendar />
                <Checkbox />
                {/* <ColorPicker /> */}
                {/* <ColorScheme /> */}
                {/* <ComboBox /> */}
                <ContextMenu />
                <DateInfo date={new Date()} />
                {/* <EmojiInput onInput = {console.log("hey")} placeholder={"🕊️💚"}/ */}>
                <FileInput />
                <FilterButton />
                {/* <FormattedInput /> */}
                {/* <Icon /> */}
                <ImageAccordion />
                <Input />
                <List>
                    <ListItem title="listItemOne"/>
                    <ListItem title="listItemTwo"/>
                </List>
                {/* <OpeningTimes /> */}
                <PersonFinder />
               {/*  <PositionInput /> */}
                <ProgressBar />
                <RadioButton />
                {/* <RfidInput /> */}
                <ScrollView />
                {/* <SearchBox /> */}
                {/* <SelectButton /> */}
                {/* <SelectItem /> */}
                <SelectList />
                {/* <SetupWizard>
                    <SetupWizardItem />
                    <SetupWizardItem />
                </SetupWizard> */}
                <Slider />
                <SliderButton />
                <SmallWaitCursor />
                {/* <TagInput /> */}
                <TextArea />
                <TextString />
                {/* <Tooltip /> */}
                <VerificationIcon name = "is" />
            </Accordion>
        </div>
export default App;