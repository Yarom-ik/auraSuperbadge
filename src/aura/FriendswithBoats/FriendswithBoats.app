<aura:application description="FriendswithBoats"  extends="force:slds" >

    <lightning:layout >
        <div class="slds-grid slds-gutters">
            <div class="slds-col slds-size_2-of-3">
                <lightning:card title="Find a Boat" class="slds-m-top_10px" >
        <c:BoatSearchForm />
    </lightning:card>/>
            </div>
            <div class="slds-col slds-size_1-of-3">
                <span>2</span>
            </div>
        </div>
    </lightning:layout>
</aura:application>